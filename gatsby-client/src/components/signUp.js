import React from 'react'
import $ from 'jquery'
import { useCookies } from 'react-cookie';
import anime from 'animejs';
import { useRef, useEffect, useState } from 'react';

export default function SignUp() {
    const username = useRef(null)
    const [alertInnerHTML, setAlert] = useState('');
    const password = useRef(null)
    const email = useRef(null)
    const darkScreen = useRef(null)
    const role = useRef(null)
    const id = useRef(null)
    const gender = useRef(null)
    const slider = useRef(null)
    const alertText = useRef(null)
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [, forceRender] = useState({});

    useEffect(() => {
        anime({
            targets: "#signUp",
            translateX: '100%',
            duration: 0
        })
        // anime({
        //     targets: slider.current,
        //     translateX: (2 / 3) * 100 + '%'
        // })
        // $(slider.current).css({ "transform": `translateX(${(1 / 3) * 100}%)` });
    }, [])
    function signUp(event) {
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    username: username.current.value,
                    password: password.current.value,
                    email: email.current.value,
                    role: role.current.value,
                    id: id.current.value,
                    gender: gender.current.value,
                })
        })
            .then(response => {
                if (response.status === 201) {
                    // alert('Your account has be created!! 🎉🎉🎉')
                    alert(<p>Your account has be created!! 🎉🎉🎉</p>)
                    clearPopup();
                }
            })
    }
    if (typeof window !== "undefined") {//this is for gatsby build to ignore this code with window.alert
        window.alert = function (message) {
            anime({
                targets: '#alert',
                translateY: ['-50%', '-50%'],
                translateX: ['100vw', '-50%'],
                duration: 200,
                easing: 'easeOutElastic(3,0.7)'
            })
            $('#alert').show();
            setAlert(message)
            // alertText.current.innerHTML = message
        }

    }
    function login() {
        alert('Logging In')
        darkScreen.current.click()
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    username: username.current.value,
                    password: password.current.value,
                })
        }).then(response => {
            console.log(response.status)
            if (response.status === 201)
                response.json().then(data => {
                    if (data[0] == 'done') {
                        setCookie('user', { "username": data[1] })
                        alert('Successfully Logged in')
                        // setCookie('user', cookies.user, { path: '/', expires: new Date(new Date().getTime() + 86400000) })
                    }
                })
            else if (response.status === 404)
                alert('User Not Found')

        })
        // setCookie('user', { username: "Admin1", password: "ppsshop" }, { path: '/', expires: new Date(new Date().getTime() + 86400000) })
    }
    function next(event) {
        $(event.target).prop('disabled', true)
        anime({
            targets: slider.current,
            translateX: {
                value: "-=" + (1 / 3 * 100) + "%",
                duration: 1000,
                easing: 'easeInOutElastic(0.5,1)',
            },
        })
    }
    function clearPopup() {
        $('.next').prop('disabled', false)
        anime({
            targets: "#darkScreen",
            opacity: {
                value: '0',
                delay: 200,
                duration: 200,
            }
        }).finished.then(function () {
            $('#darkScreen').addClass('hidden')
        })
        anime({
            targets: slider.current,
            translateX: 0
        })
        anime({
            targets: "#signUp",
            translateX: {
                value: '100%',
                duration: 200,
            },
            opacity: {
                value: 0,
                duration: 160,
            },
            easing: 'easeInElastic'
        })
    }
    return (
        <>
            <div id='alert' className='text-center w-2/3vw p-7 lg:w-1/3vw bg-white hidden border opacity-60 hover:opacity-100 top-1/2 left-1/2 transform fixed z-70 -translate-x-1/2 -translate-y-1/2'>
                <h3>Alert</h3>
                <div ref={alertText} className='text-center'>{alertInnerHTML}</div>
                <button onClick={() => $('#alert').hide()} className='next mt-4 bg-111111 block text-white w-2/3 mx-auto font-Metric-Regular justify-self-center tracking-tight py-1 text-center'>
                    Got it!
                </button>
            </div>
            <div id='darkScreen' ref={darkScreen} style={{ opacity: 0 }} onClick={clearPopup} className='popup hidden fixed w-screen h-screen top-0 left-0 bg-black opacity-60 z-50'>
            </div>
            <div id='signUp' className='popup lg:w-1/3vw w-2/3vw overflow-x-hidden top-0 fixed right-0 bg-white z-60 h-screen'>
                <div ref={slider} style={{ width: '300%' }} className='grid grid-cols-3 fixed h-screen'>
                    <div className='items-center flex justify-center h-full px-5'>
                        <div>
                            <div className='block'>
                                <label htmlFor="username" className='text-xl font-Metric-Light tracking-widest uppercase'>Username</label>
                                <input ref={username} type="text" autoCorrect='off' autoFocus autoCapitalize='off' className='px-3 py-1 text-2xl focus:border-2 focus:rounded-sm bg-white font-Metric-Light border mb-8 border-E8E8E1 focus:border-black w-full ' name="username" id="username" />
                            </div>
                            <div className='block'>
                                <label htmlFor="password" className='text-xl font-Metric-Light tracking-widest uppercase'>password</label>
                                <input ref={password} type="password" autoCorrect='off' autoFocus autoCapitalize='off' className='px-3 py-1 text-2xl focus:border-2 focus:rounded-sm bg-white font-Metric-Light border mb-8 border-E8E8E1 focus:border-black w-full ' name="password" id="password" />
                            </div>
                            <button onClick={login} className='mb-2 next bg-111111 text-white w-full font-Metric-Regular tracking-tight py-1 text-center'>
                                Log In
                            </button>
                            <button onClick={(e) => next(e)} className='next bg-111111 text-white w-full font-Metric-Regular tracking-tight py-1 text-center'>
                                Register
                            </button>
                        </div>
                    </div>
                    <div className='items-center flex justify-center h-full px-5'>
                        <div>
                            <div className='block'>
                                <label htmlFor="email" className='text-xl font-Metric-Light tracking-widest uppercase'>Email</label>
                                <input ref={email} type="email" autoCorrect='off' autoFocus autoCapitalize='off' className='px-3 py-1 text-2xl focus:border-2 focus:rounded-sm bg-white font-Metric-Light border mb-8 border-E8E8E1 focus:border-black w-full ' name="email" id="email" />
                            </div>
                            <div className='block'>
                                <label htmlFor="Role" className='text-xl font-Metric-Light tracking-widest uppercase'>Role</label>
                                <select ref={role} autoCorrect='off' autoFocus autoCapitalize='off' className='px-3 py-1 text-2xl focus:border-2 focus:rounded-sm bg-white font-Metric-Light border mb-8 border-E8E8E1 focus:border-black w-full ' name="Role" id="Role" >
                                    <option className="hover:bg-1C1D1D" value="Student">Student</option>
                                    <option className="hover:bg-1C1D1D" value="Teacher">Teacher</option>
                                </select>
                            </div>
                            <button onClick={(e) => next(e)} className='next bg-111111 text-white w-full font-Metric-Regular tracking-tight py-1 text-center'>
                                Next
                            </button>
                        </div>
                    </div>
                    <div className='items-center flex justify-center h-full px-5'>
                        <div>
                            <div className='block'>
                                <label htmlFor="id" className='text-xl font-Metric-Light tracking-widest uppercase'>ID</label>
                                <input ref={id} onFocus={() => id.current.value = 0} onChange={() => id.current.value = parseInt(id.current.value)} onBlur={() => id.current.value = parseInt(id.current.value > 99 && id.current.value < 10000 ? id.current.value : 100)} max={9999} min={100} type="number" className='px-3 py-1 text-2xl focus:border-2 focus:rounded-sm bg-white font-Metric-Light border mb-8 border-E8E8E1 focus:border-black w-full ' name="id" id="id" />
                            </div>
                            <div className='block'>
                                <label htmlFor="Gender" className='text-xl font-Metric-Light tracking-widest uppercase'>Gender</label>
                                <select ref={gender} autoCorrect='off' autoFocus autoCapitalize='off' className='px-3 py-1 text-2xl focus:border-2 focus:rounded-sm bg-white font-Metric-Light border mb-8 border-E8E8E1 focus:border-black w-full ' name="Role" id="gender" >
                                    <option className="hover:bg-1C1D1D" value="Male">Male</option>
                                    <option className="hover:bg-1C1D1D" value="Female">Female</option>
                                    <option className="hover:bg-1C1D1D" value="Others">Others</option>
                                </select>
                            </div>
                            <button onClick={signUp} className='next bg-111111 text-white w-full font-Metric-Regular tracking-tight py-1 text-center'>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
