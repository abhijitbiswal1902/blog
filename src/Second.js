import React from 'react'
import First from './First'
export default function Second() {

  return (
    <>
    <p className='page-heading '>BLOG PAGE</p>
    <div className='d-flex'>
     <First heading="Google" name="TEST1" desc="Google, founded in 1998 by Larry Page and Sergey Brin, started as a search engine and rapidly transformed into a tech giant that profoundly influences the digital landscape. Google has since expanded into various domains, including cloud computing, and mobile operating systems. Its flagship products, such as Google Search, Gmail, Google Maps, and YouTube, are integral parts of daily life for billions of people worldwide. Google's parent company, Alphabet Inc., reflects the company's broad ambitions, encompassing ventures into artificial intelligence and health technology." url="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"/>
     <First name="TEST2" heading="Twitter" desc="Twitter, founded in 2006 by Jack Dorsey, Biz Stone, and Evan Williams, revolutionized the way people communicate online with its unique microblogging platform that limits posts. Originally conceived as a simple messaging service, Twitter quickly became a powerful tool for real-time communication and information sharing, attracting users from all walks of life, including celebrities, politicians, and everyday individuals." url="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/768px-Logo_of_Twitter.svg.png?20220821125553"/>
     <First heading="Instagram" name="TEST2" desc="Instagram has played a significant role in the rise of the influencer economy, where individuals can monetize their online presence. Features like Instagram Stories and Reels have kept the platform competitive, enabling users to share ephemeral content and short videos in response to the growing popularity of similar features on other platforms like Snapchat and TikTok. Despite its success, Instagram faces challenges related to mental health, with studies suggesting that the platform's emphasis on appearance can contribute to anxiety and self-esteem issues. " url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"/> 
    </div>
    </>
  )
}