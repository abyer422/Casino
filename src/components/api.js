import axios from 'axios';

const api = axios.create({
    baseURL: 'https://deckofcardsapi.com/api/deck/'
})

export const createDeckAndDraw = async () => {
    const data = await api.get('new/draw/', {
        params: {
            count: 6
        }
    })

    return data.data.cards;
}