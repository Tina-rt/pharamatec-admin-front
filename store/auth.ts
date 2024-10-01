export const useMyAuthStore = defineStore({
    id: 'myAuthStore',
    state: () => ({
        token: '',
    }),
    actions: {
		initToken(){
			const cookie = useCookie('token');
			this.token = cookie.value ?? '';
		},
        setToken(_token: string) {
            this.token = _token;
            const cookie = useCookie('token');
            cookie.value = _token;
        },
        clearToken() {
            const cookie = useCookie('token');
            this.token = '';
            cookie.value = '';
        },
    },
});
