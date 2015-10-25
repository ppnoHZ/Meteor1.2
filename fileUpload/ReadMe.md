文件上传简单Demo
===============
package

* [collectionFS](https://github.com/CollectionFS/Meteor-CollectionFS)


注意标点符号拷贝下来的引号不能识别。
[[例子]](https://medium.com/@victorleungtw/how-to-upload-files-with-meteor-js-7b8e811510fa)

## 文件名结构

* 存储在本地的文件名称组成
* [] - [数据库中文件的ID]  -[文件名称包含扩展名]
* images-EeL8MwRk9b7em9HfC-rsc28x28.png

## 扩展
当选择文件之后，点击上传才上传，可以通过
  ’‘’
     var file = $('#file').get(0).files[0];
  ‘’‘
  获取到选择的文件对象。

## 数据库生成四个表
* cfs.images.fileecord
* cfs._temostore.chunks
* cfs_gridfs._temostore.files
* cfs_gridfs._temostore.chunks