const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} =require('../config/keys')
const requireLogin = require('../middleware/requireLogin')
// router.get('/subscribe',requireLogin,(req,res)=>{
//     User.find()
//     .then(allusers=>{
//         res.json({allusers})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })

router.post('/subscribe',async(req,res)=>{
    const {name,college,email,contributions,mobile,password} = req.body
    if(!email || !password || !name ||!mobile){
       return res.status(422).json({error:"please add all the fields"})
    }
    await User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"user already exists with the email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                name,
                college,
                email,
                mobile,
                password:hashedpassword,
                contributions,
            })
            user.save()
            .then(user=>{
                res.json({message:"subscribed successfully"})
            })
            .then(result=>{
                res.json({user:result})
            })
            .catch(err=>{
                console.log(err)
            })
        })
        
    })
    .catch(err=>{
        console.log(err)
    })
})
router.post("/profile",async (req,res)=>{
    const {name,college,email,contributions,mobile,password} = req.body
    console.log(email)
    console.log(password)
    if(!email  || !college || !name || !mobile || !contributions){
        return res.status(422).json({error:"please add all the fields"})
     }
     else if(!password)
     {
        await User.findOne({email:email})
        .then(savedUser=>{
            if(!savedUser){
                return res.status(422).json({error:"Invalid email or password"})
            }
            savedUser.email=email
            savedUser.name=name
            savedUser.college=college
            savedUser.contributions=contributions
            savedUser.mobile=mobile
                savedUser.save()
                .then(updateduser=>{
                    res.json({message:"successfully updated"})
                })
                .catch(err=>{
                    console.log(err)
                })
            })
            .catch(err=>{
                console.log(err)
            })
     }
     else
     {
        await User.findOne({email:email})
        .then(savedUser=>{
            if(!savedUser){
                return res.status(422).json({error:"Invalid email or password"})
            }
            bcrypt.hash(password,15)
            .then(hashedpassword=>{
                savedUser.password=hashedpassword
                savedUser.save()
                .then(updateduser=>{
                    res.json({message:"updated successfully"})
                })
                .catch(err=>{
                    console.log(err)
                })
            })
        })
        .catch(err=>{
            console.log(err)
        })
     }
     
    
})
router.post("/details",async(req,res)=>{
    const {mail} =req.body
    await User.findOne({email:mail})
    .then(savedUser=>{
        if(savedUser){
            const {_id,name,email,mobile,college,contributions} = savedUser
                res.json({user:{_id,name,email,mobile,college,contributions}})
        }
    })
    .catch(err=>{
        console.log(err)
    })
})
router.post("/signin",async(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        res.status(422).json({error:"please add email or password"})
    }
    await User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:'successfully signed in'})
                const token = jwt.sign({_id:savedUser.id},JWT_SECRET)
                const {_id,name,email} = savedUser
                res.json({token,user:{_id,name,email}})
            }
            else{
                return res.status(422).json({error:"Invalid email or password"})
                
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})
module.exports = router