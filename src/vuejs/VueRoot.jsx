
import { Summary } from "./summaryPresenter.jsx";
import { Details } from "./detailsPresenter.jsx";
import { Search } from "./searchPresenter.jsx";
import { Sidebar } from "./sidebarPresenter.jsx";
import { SuspenseView } from "../views/suspenseView.jsx";
import { createRouter, createWebHashHistory, RouterView } from "vue-router";

function makeRouter(model) {
    return createRouter({
        history: createWebHashHistory(),
        routes: [
            {
                path: "/",
                component: {
                    render() {
                        return <Search model={model} />;
                    }
                }
            },
            {
                path: "/search",
                component: {
                    render() {
                        return <Search model={model} />;
                    }
                }
            },
            {
                path: "/summary",
                component: {
                    render() {
                        return <Summary model={model} />;
                    }
                }
            },
            {
                path: "/details",
                component: {
                    render() {
                        return <Details model={model} />;
                    }
                }
            }
        ]
    });
}

function VueRoot(props) {
    if (!props.model.ready) {
        return <SuspenseView promise="Loading data" />;
    }

    return <div class="flexParent">
        <div class="sidebar">
            <Sidebar model={props.model} />
        </div>

        <div class="mainContent">
            <RouterView />
        </div>
    </div>;
}

export { VueRoot, makeRouter };
