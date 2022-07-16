import TabPanelForm from '../components/TabPanelForm.vue'

export default{
    title: "TabPanelForm/TabPanelForm",
    component: TabPanelForm,
}

function submit(){}

const Template = () => ({
    components: {TabPanelForm},
    setup(){
    },
    template: '<TabPanelForm @on-submit="submit" />'
})

export const TP1 = Template.bind({})