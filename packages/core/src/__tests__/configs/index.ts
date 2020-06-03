import { htmlContainers, htmlNonContainers } from './htmlCategory';
import * as AllComponentConfigs from './HTML';

/**
 * 设计面板iframe 模板，如果集成到项目中，需要将拖拽组件所依赖的样式在模板中设置，
 * 否则设计面板渲染的页面将是无样式的效果
 */
const config: any = {
  OriginalComponents:{},
  AllComponentConfigs,
  CONTAINER_CATEGORY:htmlContainers,
  NON_CONTAINER_CATEGORY:htmlNonContainers,
};

export default config;
