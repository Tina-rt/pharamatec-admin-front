export const getAllOrders = async () => {
    const { data } = await $api('commande/liste');
    return data;
};

export const getOrderById = async (orderId: number) => {
    const { data } = await $api(`commande/${orderId}`);
    return data;
};
