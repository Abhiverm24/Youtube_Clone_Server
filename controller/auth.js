import jwt from 'jsonwebtoken'
import users from '../models/auth.js'

export const login = async(req,res)=>{
    const {email} =  req.body;
    // console.log(email);

    try {
        const existinguser = await users.findOne({email});
        if(!existinguser){
            try {
                const newUser = await users.create({email});

                const token = jwt.sign({
                    email: newUser.email , id:newUser._id
                },process.env.JWT_SECRET,{
                    expiresIN: "1h"
                })
                res.status(200).json({result:newUser,token})
            } catch (error) {
                res.status(500).json({mess:"Something wents wrong..."});
            }
        }
        else{

            const token=jwt.sign({
                email:existinguser.email, id:existinguser._id
            },process.env.JWT_SECRET,{
                expiresIn:"1h"
            })
            res.status(200).json({result:existinguser,token})
        }
    } catch (error) {
        res.status(500).json({mess:"something wents wrong..."})
    }
}