// import { getServerSession } from "next-auth";

import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";

export default async function handler(req, res) {
    if(req.method != 'DELETE') { return res.status(400).json('잘못된 접근입니다.') }
    console.log(req.body);

    // 유저기능 구현 후 추가
    // let sesison = await getServerSession(req, res, authOptions)
    // if(!session) { res.status(500).json('로그인이 필요합니다.') }
    // if(session.user.id != data.author) { res.status(500).json('작성자만 삭제할 수 있습니다.') }

    const db = (await connectDB).db('posts')
    let data = await db.collection('post').findOne({_id: new ObjectId(req.body)})
    if(!data) { return res.status(404).json('게시글이 존재하지 않습니다.') }
    console.log(data);
    await db.collection('post').deleteOne(data)

    return res.status(200).json('게시글이 삭제되었습니다.')
}