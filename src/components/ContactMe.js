import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import phone from '../assets/skills/phone.png'
import linkedIn from '../assets/skills/linkedIn.png'
import gitHub from '../assets/skills/gitHub.png'
import gMail from '../assets/skills/gMail.png'

const ContactMe = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isMailCopied, setIsMailCopied] = useState(false)

  const onCopyHandler = (text, result) => {
    if (result) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } else {
      alert('Failed to copy text. Please try again.');
    }
  };

  const onMailCopyHandler = (text, result) => {
    if (result) {
      setIsMailCopied(true);
      setTimeout(() => setIsMailCopied(false), 3000);
    } else {
      alert('Failed to copy text. Please try again.');
    }
  };
  return (
    <div className='w-2/5'>
      <div className="rounded-md overflow-hidden shadow-lg bg-orange-100 mr-6 my-4">
        <div className='flex m-2'>
          <img
            className="h-10 w-10"
            src={linkedIn} alt={`${linkedIn}`} />
          <div className='pl-2 items-center'>
            <p className='text-l font-bold font-robo bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent w-16'>LinkedIn</p>
            <a href='https://www.linkedin.com/in/pravallika-pothireddy-219542228/' target="_blank">https://www.linkedin.com/in/pravallika-pothireddy-219542228/</a>
          </div>
        </div>
      </div>
      <div className="rounded-md overflow-hidden shadow-lg bg-cyan-100 mr-6 my-4">
        <div className='flex m-2'>
          <img
            className="h-10 w-10"
            src={gitHub} alt={`${gitHub}`} />
          <div className='pl-2 items-center'>
            <p className='text-l font-bold font-robo bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent w-14'>GitHub</p>
            <a href='https://github.com/Pravallika24224?tab=repositories' target="_blank">https://github.com/Pravallika24224?tab=repositories</a>
          </div>
        </div>
      </div>
      <div className="rounded-md overflow-hidden shadow-lg bg-red-200 mr-6 my-4">
        <div className='flex m-2'>
          <img
            className="h-10 w-10"
            src={phone} alt={`${phone}`} />
          <div className='pl-2 items-center'>
            <p className='text-l font-bold font-robo bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent w-12'>Phone</p>
            <CopyToClipboard text="+91 9347945530" onCopy={onCopyHandler}>
              <p className='text-gray-700 text-base'>+91 9347945530</p>
            </CopyToClipboard><br/>
            {isCopied && <div className="bg-green-100 border border-green-400 text-green-700 px-2 py-1 rounded relative">Mobile Number copied to clipboard!</div>}
          </div>
        </div>
      </div>
      <div className="rounded-md overflow-hidden shadow-lg bg-green-100 mr-6 my-4">
        <div className='flex m-2'>
          <img
            className="h-10 w-10"
            src={gMail} alt={`${gMail}`} />
          <div className='pl-2 items-center'>
            <p className='text-l font-bold font-robo bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent w-10'>Mail</p>
            <CopyToClipboard text="pothireddy.pravallika10@gmail.com" onCopy={onMailCopyHandler}>
              <p className='text-gray-700 text-base'>pothireddy.pravallika10@gmail.com</p>
            </CopyToClipboard><br/>
            {isMailCopied && <div className="bg-green-100 border border-green-400 text-green-700 px-2 py-1 rounded relative">MailID copied to clipboard!</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe