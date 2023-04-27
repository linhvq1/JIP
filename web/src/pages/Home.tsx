import { observer, inject } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { Table, Upload, Button } from 'antd'

import { CounterStore, ProjectStore } from '../stores'
import { RcFile } from 'antd/es/upload';
import { toJS } from 'mobx';
type IProps = {
  counterStore?: CounterStore,
  projectStore: ProjectStore
}
function Home({counterStore, projectStore}: IProps) {
  const [column, setColumn] = useState([])
  const [dataset, setDataset] = useState([])

  useEffect(() => {
    if(projectStore.mlData){
      let {schema, data} = projectStore.mlData
      if(schema && schema?.fields?.length){
        let columnTemp =   schema?.fields.map((dt: any) =>({
          title: dt.name,
          dataIndex: dt.name,
          key: dt.name,
        }))
        setColumn(columnTemp)
      }
      if(data?.length){
        setDataset(data)
      }
    }
  
    return () => {
    }
  }, [projectStore.mlData])
  
  console.log('column', toJS(column));
  

  const handleUpload = (file: RcFile) =>{
    const formData = new FormData()
    formData.append('file', file, file.name)
    projectStore.getMlData(formData).then(res => console.log('res', res)).catch(error => console.log(error))
    return false
  }

  console.log('projectStore.mlData', toJS(projectStore.mlData));
  
  
  return (
    <div className='p-3'>
      <Upload 
        beforeUpload={(file) => handleUpload(file)}
      >
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <Table columns={column} dataSource={dataset} rowKey={(record) => record.index}/>
    </div>
  )
}

export default inject('counterStore', 'projectStore')(observer(Home))