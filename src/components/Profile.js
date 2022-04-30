import React from 'react';

const Profile=()=>{
    const [name, setName] = React.useState('');
    const [edu,setedu] = React.useState();
    const[skill,setSkill] = React.useState();
    const[exp,setExp] = React.useState();
    const[proj,setProj] = React.useState();
    const[cert,setCert] = React.useState();
    const[sal,setSal] = React.useState();
    const [error,setError] = React.useState(false);

    const submit = async () => {

        if(!name || !edu || !skill || !exp || !proj || !sal )
        {
            setError(true);
            return false
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/profile", {
            method: "post",
            body: JSON.stringify({ name, edu, skill , exp, proj , cert , sal  }),
            headers: {
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result)

    }

    return(
        <>
        <div className='profile'>
            <h1>User Profile</h1>
            <input type="text" placeholder='Enter your name' className='inputBox' value={name} onChange={(e) => { setName(e.target.value) }}   />
            {error && !name && <span className='invalid-input'>Enter valid name</span>}

            <input type="text" placeholder="Enter your education" className="inputBox" value={edu} onChange={(e) => { setedu(e.target.value) }}/>
            {error && !edu && <span className='invalid-input'>Enter valid name</span>}

            <input type="text" placeholder='Enter one major skill  Of your education' className='inputBox' value={skill}
            onChange={(e)=>{setSkill(e.target.value)}} />
            {error && !skill && <span className='invalid-input'>Enter valid skill</span>}

            <input type='number' placeholder='Enter your experience' className='inputBox' value={exp}
             onChange={(e)=>setExp(e.target.value)}  />
            {error && !exp && <span className='invalid-input'>Enter valid experience</span>}

            <input type='text' placeholder='Enter your project field' className='inputBox' value={proj} 
            onChange={(e)=>{setProj(e.target.value)}}  />
            {error && !proj && <span className='invalid-input'>Enter valid project field</span>}

            <input type='text' placeholder='Enter certifications you have(If any)' className='inputBox' value={cert} onChange={(e)=>{setCert(e.target.value)}}  / >

            <input type="number" placeholder='enter your expected salary' className='inputBox' value={sal} onChange={(e)=>{setSal(e.target.value)}}  />
            {error && !sal && <span className='invalid-input'>Enter valid expected salary field</span>}

            <button onClick={submit} className='appButton'>Submit</button>

        </div>
        </>
    )
}

export default Profile;