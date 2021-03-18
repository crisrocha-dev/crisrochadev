import fs from 'fs'
import greyMatter from 'gray-matter'
import remark from 'remark'
import htmlRemark from 'remark-html'

export function getAllPosts(){
	const allPostsFilneName = fs.readdirSync('./src/_posts');
	
	const posts = allPostsFilneName.map(filename => {
		const fileContent = fs.readFileSync(`./src/_posts/${filename}`,'utf-8')
		const {content, data:metadata } = greyMatter(fileContent)

		const htmlContent = remark()
		.use(htmlRemark)
		.processSync(content)
		.toString()

		return{
			metadata:{
				...metadata,
				slug:filename.replace('.md','')
			},
			content:htmlContent
		}
	})
	return posts;
}