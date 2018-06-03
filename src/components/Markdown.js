import React, { createElement } from 'react'
import marksy from 'marksy'
import Image from 'react-image'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { agate as SyntaxStyle } from 'react-syntax-highlighter/dist/styles/hljs'

const compile = marksy({
  createElement,
  elements: {
		a ({ href, title, target, children }) {
			return (
				<a href={href} title={title} target='_blank' rel='noopener noreferrer'>
					{children}
				</a>
			)
		},
    img ({src, alt}) {
			return (
				<Image
					className='image'
					src={src}
					alt={alt}
					loader={<span>LOADING...</span>}
					unloader={<span>FAILED TO LOAD IMAGE</span>}
				/>
			)
		},
		code({language, code, children}) {
      if(children)
        return <code className='inlineCode' children={children}/>
      else
        return (
					<div className='blockCode'>
          	<SyntaxHighlighter language={language} style={SyntaxStyle} children={code}/>
        	</div>
				)
    }
  }
})

export default compile
