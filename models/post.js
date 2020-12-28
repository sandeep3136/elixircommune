const mongoose = require('mongoose')

const postEditionsSchema = new mongoose.Schema({
    photo:{
        type:String,
        required:true
        
    },
    edition:{
        type:String,
        required:true
    },
    editionLink:{
        type:String,
        required:true
    }
},{timestamps:true})

const postSlidesSchema = new mongoose.Schema({
    dkSlideImage :{
        type:String,
        required:true
    },
    slideTitle:{
        type:String,
        required:true
    },
    slideLink:{
        type:String,
        required:true
    },

})

const postMbSlidesSchema = new mongoose.Schema({
    mbSlideImage :{
        type:String,
        required:true
    },
    mbSlideTitle:{
        type:String,
        required:true
    },
    mbSlideLink:{
        type:String,
        required:true
    }
})

const feedbackSchema = new mongoose.Schema({
    email:{
        type:String
    },
    feedback:{
        type:String
    }
}, { timestamps: { createdAt: 'created_at' } })
mongoose.model("PostSlides",postSlidesSchema)
mongoose.model("PostMbSlides",postMbSlidesSchema)
mongoose.model("PostEditions",postEditionsSchema)
mongoose.model("Feedback",feedbackSchema)