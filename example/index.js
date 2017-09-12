import { config, start, componentFactory } from 'mk-meta-engine'
import * as mkComponents from 'mk-component'
import myConfig  from './config'

import mk_app_tree_table_detail from './apps/mk-app-tree-table/apps/mk-app-tree-table-detail/index.js'
import mk_app_tree_table_type from './apps/mk-app-tree-table/apps/mk-app-tree-table-type/index.js'
import mk_app_tree_table from './apps/mk-app-tree-table/index.js'

const apps = {
		
	[mk_app_tree_table_detail.name]: mk_app_tree_table_detail,	
	[mk_app_tree_table_type.name]: mk_app_tree_table_type,	
	[mk_app_tree_table.name]: mk_app_tree_table,
}

apps.config = (options) => {
	Object.keys(options).forEach(key => {
		const reg = new RegExp(`^${key == '*' ? '.*' : key}$`)
		Object.keys(apps).forEach(appName => {
			if (appName != 'config') {
				if (reg.test(appName)) {
					apps[appName].config(options[key])
				}
			}
		})
	})
}

apps.config({ '*': { apps } })

config(myConfig({ apps }))

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	
start()