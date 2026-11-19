
import { createApp, h } from "vue";
import { reactiveModel } from "../vueReactiveModel.js";
import { VueRoot, makeRouter } from "./VueRoot.jsx";

window.React = { createElement: h };

const app = createApp(function render() {
    return <VueRoot model={reactiveModel} />;
});

app.use(makeRouter(reactiveModel));

app.mount("#root");
