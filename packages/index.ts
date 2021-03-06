import { App } from 'vue'
import CdButton from './button'
import CdBorder from './border'
import CdIcon from './icon'
import CdRow from './row'
import CdCol from './col'
import CdLink from './link'
import CdScrollbar from './scrollbar'
import CdCascader from './cascader'
import CdCheckbox from './checkbox'
import CdCheckboxGroup from './checkboxgroup'
import CdDatePicker from './datepicker'
import CdInput from './input'
import CdInputNumber from './numberinput'
import CdRadio from './radio'
import CdRate from './rate'
import CdSelect from './select'
import CdSlider from './slider'
import CdSwitch from './switch'
import CdUpload from './upload'
import CdAvatar from './avatar'
import CdBadge from './badge'
import CdCarousel from './carousel'
import CdCollapse from './collapse'
import CdEmpty from './empty'
import CdImage from './image'
import CdPagination from './pagination'
import CdProgress from './progress'
import CdTable from './table'
import CdTag from './tag'
import CdBacktop from './backtop'
import CdBreadcrumb from './breadcrumb'
import CdPageHeader from './pageheader'
import CdTabs from './tabs'
import CdTabPane from './tabpane'
import CdAlert from './alert'
import CdDialog from './dialog'
import CdDrawer from './drawer'
import CdMessage from './message'
import CdTooltip from './tooltip'

// 所有组件列表
const components = [CdButton, CdBorder, CdIcon, CdRow, CdCol, CdLink, CdScrollbar, CdCascader, CdCheckbox, CdCheckboxGroup, CdDatePicker, CdInput, CdInputNumber, CdRadio, CdRate, CdSelect, CdSlider, CdSwitch, CdUpload, CdAvatar, CdBadge, CdCarousel, CdCollapse, CdEmpty, CdImage, CdPagination, CdProgress, CdTable, CdTag, CdBacktop, CdBreadcrumb, CdPageHeader, CdTabs, CdTabPane, CdAlert, CdDialog, CdDrawer, CdMessage, CdTooltip]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
    // 遍历注册所有组件
    components.map((component) => app.component(component.name, component))
}

export {
    CdButton,
    CdBorder,
    CdIcon,
    CdRow,
    CdCol,
    CdLink,
    CdScrollbar,
    CdCascader,
    CdCheckbox,
    CdCheckboxGroup,
    CdDatePicker,
    CdInput,
    CdInputNumber,
    CdRadio,
    CdRate,
    CdSelect,
    CdSlider,
    CdSwitch,
    CdUpload,
    CdAvatar,
    CdBadge,
    CdCarousel,
    CdCollapse,
    CdEmpty,
    CdImage,
    CdPagination,
    CdProgress,
    CdTable,
    CdTag,
    CdBacktop,
    CdBreadcrumb,
    CdPageHeader,
    CdTabs,
    CdTabPane,
    CdAlert,
    CdDialog,
    CdDrawer,
    CdMessage,
    CdTooltip
}

export default {
    install
}
