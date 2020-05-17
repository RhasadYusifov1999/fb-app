import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            fetchPost: [],
            detailObj: {}
        },
        getters: {
            allPost(state) {
                return state.fetchPost;
            },
            detailData(state) {
                return state.detailObj;
            }
        },
        mutations: {
            detailData(state, payload) {
                let getIndex = state.fetchPost.findIndex(i => i.id == payload);
                state.detailObj = state.fetchPost[getIndex];
            },
            pushFetch(state, payload) {
                state.fetchPost.push(payload);
            },
            spliceCard(state, payload) {
                let getIndex = state.fetchPost.findIndex(i => i.id == payload);
                state.fetchPost.splice(getIndex, 1);
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                if (!process.client) {
                    console.log("Serverdə çalışır...");
                }
                return context.app.$axios.get(process.env.baseUrl + "/posts.json")
                    .then(res => {
                        for (let key in res.data) {
                            vuexContext.state.fetchPost.push({ id: key, ...res.data[key] });
                        }
                    });
            },
            postFB(vuexContext, payload) {
                return this.$axios.post(process.env.baseUrl + "/posts.json", payload);
            },
            editFun(vuexContext, payload) {
                let id = payload.id;
                vuexContext.state.detailObj = { ...payload, id: id, };
                return this.$axios.put(process.env.baseUrl + "/posts/" + id + ".json", payload)
            },
            trashCard(vuexContext, payload) {
                this.$axios.delete(process.env.baseUrl + "/posts/" + payload + ".json")
                    .then(res => {
                        if (res.status == 200) {
                            vuexContext.commit("spliceCard", payload);
                        }
                        else { }
                    });
            }
        }
    });
}

export default createStore;