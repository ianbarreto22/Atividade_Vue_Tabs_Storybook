import TabPanel from "../components/TabPanel.vue"

export default{
    title: "TabPanel/TabPanel",
    component: TabPanel,
}

const Template = (args) => ({
    components: {TabPanel},
    setup(){
        return {args}
    },
    template: '<TabPanel v-bind="args" />'
})

export const TP1 = Template.bind({})

TP1.args = {
    tabs: [
        {
            title: "Tab 1",
            content: "Conteúdo 1",
        },
        {
          title: "Tab 2",
          content: "Conteúdo 2",
      },
      {
          title: "Tab 3",
          content: "Conteúdo 3",
      },
      {
          title: "Tab 4",
          content: "Conteúdo 4",
      },
    ]
}

export const TP2 = Template.bind({})
TP2.args = {
    tabs: [
        {
            title: "Tab A",
            content: "Conteúdo A",
        },
        {
          title: "Tab B",
          content: "Conteúdo B",
      },
      {
          title: "Tab C",
          content: "Conteúdo C",
      },
      {
          title: "Tab D",
          content: "Conteúdo D",
      },
      {
        title: "Tab E",
        content: "Conteúdo E",
    },
    {
        title: "Tab G",
        content: "Conteúdo G",
    },
    {
        title: "Tab H",
        content: "Conteúdo H",
    },
    {
        title: "Tab I",
        content: "Conteúdo I",
    },
    ]
}