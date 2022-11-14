export interface detailInter{
    title: string,
    mediaInfo : {
        thumbnail ?: string,
        length : number,
        quality : string,
        seriesNum : number,
        age : number
    },
    contentInfo : {
        createYear: number,
        actors : string,
        genre : string,
        character : string,
        summary : string
	},
    userInfo ? : {
        currentTime : number,
        isLike : boolean
    }
}