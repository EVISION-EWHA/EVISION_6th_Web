import { useState, useEffect } from 'react';
import './import.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import Axios from 'axios';


function Post() {
  const [Content, setContent] = useState({
    title: '',
    content: '',
    user: ''
  })

  const [viewContent, setViewContent] = useState([]);

  useEffect(()=>{
    Axios.get('http://3.37.117.164:8080/board').then((response)=>{
      setViewContent(response.data);
    })
  },[viewContent])
  
  const submitReview = ()=>{
    Axios.post('http://3.37.117.164:8080/board', {
      title: Content.title,
      content: Content.content
    }).then(()=>{
      alert('등록 완료!');
    })
  };

  const getValue = e => {
    const { name, value } = e.target;
    setContent({
      ...Content,
      [name]: value
    })
  };


  return (
    <div className="Post">
      <h1>게시글</h1>
      <div className='container'>
        {viewContent.map(element =>
          <div style={{ border: '1px solid black' }}>
            <h2>{element.title}</h2>
            <div>
              {ReactHtmlParser(element.content)}
            </div>
          </div>
        )}
      </div>
      <div className='form-wrapper'>
        
        <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
        />
        <CKEditor
          editor={ClassicEditor}
          // data="<p>내용</p>"
          onReady={editor => {
      
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setContent({
              ...Content,
              content: data
            })
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <div><button
        className="submit-button"
        onClick={submitReview}
        >입력</button></div>
      </div>
    
  );
}

export default Post;