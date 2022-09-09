import { Upload } from 'antd';
import React, { useState } from 'react';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
//提示函数
function tip(tips, flag) {
  let tipNode = document.createElement("div");
  tipNode.innerText = tips;
  document.body.appendChild(tipNode);
  tipNode.style.animation = "tips 1.5s linear";
  if(flag === 'success'){
    tipNode.style.color = 'greenyellow'
  }
  tipNode.classList.add("tip");
  //等待时间后 移除提示
  setTimeout(() => {
    document.body.removeChild(tipNode);
  }, 1500);
}

export default function UploadC (props) {
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url);
        props.setState((pre) => {
          return { ...pre, isUpload: false };
        })
        tip('上传成功','success')
        setTimeout(()=>{
          window.location.reload()
        },1500)
      });
    }else if(info.file.status === 'error'){
      console.log('error');
      props.setState((pre) => {
        return { ...pre, isUpload: false };
      })
      tip('上传失败')
    }
  };
  const uploadButton = (
    <div>
      <div
        style={{
          marginTop: 8,
        }}
      >
        选择图片
      </div>
    </div>
  );

  return (
    <Upload
      method='post'
      action={`/weiboke/static/Image/cover?columnId=${props.columnId}`}
      showUploadList={false}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};