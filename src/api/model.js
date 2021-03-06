import client from '../utils/fetch'

export function getModel(id) {
  return client({
    url: '/tools/model?id='+ id,
    method: 'get',
  })
}

export function queryModels(query) {
  return client({
    url: '/tools/model/list',
    method: 'get',
    params:query
  })
}

export function edit(param) {
  return client({
    url: '/tools/model',
    method: 'put',
    data:param
  })
}

//模型属性删改
/*
* {"attributes":[],"drop_attributes":[]}
* */
export function attributes(data) {
  return client({
    url: '/tools/model/attribute',
    method: 'put',
    data:data
  })
}




//模型 app关联
export function model_apps(query) {
  return client({
    url: '/tools/model_apps',
    method: 'get',
    params:query
  })
}

export function modifyVersion(data) {
  return client({
    url: '/tools/model_app/version',
    method: 'put',
    data:data
  })
}

export function removeRelation(data) {
  return client({
    url: '/tools/model_app',
    method: 'Delete',
    data:data
  })
}

export function addRelation(data) {
  return client({
    url: '/tools/model_app',
    method: 'POST',
    data:data
  })
}






