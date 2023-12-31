import './Sidebar.css'

export const Sidebar = () => {

    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <div>
                <svg class="NavIcon HomeNavIcon" viewBox="0 0 40 40" aria-hidden="true" focusable="false"><path d="M37.9,15L22.2,3.8c-1.3-1-3.1-1-4.4-0.1L2.2,14.4c-0.7,0.5-0.9,1.4-0.4,2.1c0.5,0.7,1.4,0.9,2.1,0.4L6,15.4v12.3c0,4.6,3.7,8.3,8.3,8.3h11.4c4.6,0,8.3-3.7,8.3-8.3V15.9l2.1,1.5c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6C38.7,16.4,38.5,15.5,37.9,15z M31,27.7c0,2.9-2.4,5.3-5.3,5.3H14.3C11.4,33,9,30.6,9,27.7V13.3l10.6-7.2c0.2-0.2,0.5-0.2,0.8,0L31,13.7V27.7z"></path></svg>
                    <p>Home</p>
                </div>
                <div>
                    <svg class="NavIcon CheckNavIcon" viewBox="0 0 40 40" aria-hidden="true" focusable="false"><path d="M20,2.5C10.4,2.5,2.5,10.4,2.5,20S10.4,37.5,20,37.5S37.5,29.6,37.5,20S29.6,2.5,20,2.5z M20,34.5C12,34.5,5.5,28,5.5,20S12,5.5,20,5.5S34.5,12,34.5,20S28,34.5,20,34.5z M27.7,15c0.6,0.6,0.6,1.5,0,2.1l-10,10c-0.2,0.2-0.6,0.3-1,0.3c-0.4,0-0.8-0.1-1.1-0.4l-4.1-4.1c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l3.1,3.1l8.9-8.9C26.2,14.4,27.1,14.4,27.7,15z"></path></svg>
                    <p>My Task</p>
                </div>
                <div>
                <svg class="NavIcon BellNavIcon" viewBox="0 0 40 40" aria-hidden="true" focusable="false"><path d="M7.5,32L7.5,32h-1c-1.5,0-2.8-0.8-3.4-2c-0.8-1.5-0.4-3.4,0.9-4.5c1.2-1,1.9-2.4,2-3.9v-6.1C6,8.1,12.3,2,20,2s14,6.1,14,13.5V22c0.2,1.4,0.9,2.6,2,3.5c1.3,1.1,1.7,2.9,0.9,4.5c-0.6,1.2-2,2-3.4,2h-0.9H7.5z M7.6,29h25.8c0.3,0,0.7-0.2,0.8-0.4c0.2-0.4,0-0.7-0.2-0.8l0,0c-1.6-1.4-2.7-3.3-3-5.5c0-0.1,0-0.1,0-0.2v-6.6C31,9.7,26.1,5,20,5S9,9.7,9,15.5v6.1v0.1c-0.2,2.4-1.3,4.5-3.1,6c-0.2,0.2-0.3,0.5-0.2,0.8C5.9,28.8,6.2,29,6.5,29H7.6L7.6,29z M24.7,34c-0.7,1.9-2.5,3.2-4.7,3.2s-4-1.3-4.7-3.2H24.7z"></path></svg>
                <p>Inbox</p>
                </div>
            </div>
            <div className='line'></div>
            <div className='new_breaker'>Insights <p style={{margin:'0 0 0 8px',color:'whitesmoke'}}>+</p></div>
            <div className='sidebar_top'>
                <div>
                <svg class="NavIcon ReportingNavIcon" viewBox="0 0 40 40" aria-hidden="true" focusable="false"><path d="M34.5,6c-2.48,0-4.5,2.02-4.5,4.5,0,1.13.43,2.14,1.11,2.93l-4.28,7.55s-.03.06-.04.09c-.26-.05-.52-.08-.79-.08-.85,0-1.64.25-2.32.66l-4.46-3.65c.17-.48.28-.98.28-1.51,0-2.48-2.02-4.5-4.5-4.5s-4.5,2.02-4.5,4.5c0,.94.29,1.81.79,2.54l-4.51,6.17c-.41-.12-.83-.21-1.28-.21-2.48,0-4.5,2.02-4.5,4.5s2.02,4.5,4.5,4.5,4.5-2.02,4.5-4.5c0-.94-.29-1.81-.79-2.54l4.51-6.17c.41.12.83.21,1.28.21.85,0,1.64-.25,2.32-.66l4.46,3.65c-.17.48-.28.98-.28,1.51,0,2.48,2.02,4.5,4.5,4.5s4.5-2.02,4.5-4.5c0-1.13-.43-2.15-1.12-2.94.02-.03.05-.06.07-.09l4.27-7.54c.26.05.51.08.78.08,2.48,0,4.5-2.02,4.5-4.5s-2.02-4.5-4.5-4.5ZM5.5,31c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Zm9.5-13c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Zm11,9c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Zm8.5-15c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Z"></path></svg>                    
                <p>Reporting</p>
                </div>
                <div>
                <svg class="NavIcon PortfoliosNavIcon" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                <path d="M35,12c1.7,0,3,1.3,3,3v16c0,2.8-2.2,5-5,5H7c-2.8,0-5-2.2-5-5V7c0-1.7,1.3-3,3-3h11.9c0.4,0,0.8,0.2,0.9,0.6  l2.4,5.6c0.5,1.1,1.6,1.8,2.8,1.8H35z M35,15v16c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V15H35z M17.8,12c-0.1-0.2-0.2-0.4-0.3-0.7  L15.6,7H5v5H17.8z"></path>                    
                </svg>
                <p>Portfolios</p>
                </div>
                <div>
                <svg class="NavIcon GoalNavIcon" viewBox="0 0 40 40" aria-hidden="true" focusable="false"><path d="M35.6,30.1l-6.2-9.6C31,18.5,32,15.9,32,13c0-6.6-5.4-12-12-12C13.4,1,8,6.4,8,13c0,2.9,1,5.5,2.7,7.6l-6.2,9.6  c-1.2,1.8-1.3,4-0.2,5.9c1,1.9,2.9,3,5.1,3h21.5c2.1,0,4-1.1,5.1-3S36.7,31.9,35.6,30.1z M11,13c0-5,4-9,9-9c5,0,9,4,9,9  c0,1.8-0.5,3.5-1.4,4.9l-2.7-4.2c-1.1-1.6-2.9-2.6-4.8-2.6c-1.9,0-3.7,1-4.8,2.6l-2.7,4.2C11.5,16.5,11,14.8,11,13z M25.5,20.2  C23.9,21.3,22.1,22,20,22s-3.9-0.7-5.5-1.9l3.2-4.8c0.5-0.8,1.4-1.2,2.3-1.2c0.9,0,1.8,0.5,2.3,1.2L25.5,20.2z M33.2,34.6  c-0.5,0.9-1.4,1.4-2.4,1.4H9.2c-1,0-1.9-0.5-2.4-1.4c-0.5-0.9-0.4-1.9,0.1-2.8l6-9.1c2,1.5,4.4,2.3,7.1,2.3c2.7,0,5.1-0.9,7.1-2.3  l6,9.1C33.6,32.6,33.7,33.7,33.2,34.6z"></path></svg>
                <p>Goals</p>
                </div>
            </div>
            <div className='new_breaker'>Projects <p style={{margin:'10px 0 10px 8px',color:'whitesmoke'}}>+</p></div>
            <div className='new_breaker'>Team</div>
            <div className='sidebar_bottom'>
                <div>
                <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/94c2a499b51d9f3439c63eb3d51b7616753733b5/20px_logo.svg" alt="" />
                <p>Invite</p>
                </div>
                <div>
                <svg class="Icon QuestionMarkCircleIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16C32,7.2,24.8,0,16,0 M16,2c7.7,0,14,6.3,14,14s-6.3,14-14,14S2,23.7,2,16C2,8.3,8.3,2,16,2 M14,24.4c-0.1-0.8,0.6-1.5,1.4-1.6c0,0,0.1,0,0.1,0c0.8,0,1.5,0.6,1.5,1.4c0,0.1,0,0.1,0,0.2c0,0.8-0.5,1.5-1.3,1.5c-0.1,0-0.1,0-0.2,0c-0.8,0.1-1.4-0.5-1.5-1.2C14,24.6,14,24.5,14,24.4 M15.8,7.1c3.3,0,5.6,2.1,5.6,4.8c0,1.9-1.1,3.7-2.8,4.6c-1.7,1-2.2,1.7-2.2,3.1v0.9h-2.3v-1.2c0-1.8,0.8-3,2.7-4c1.5-0.9,2.1-1.8,2.1-3.2c-0.1-1.7-1.4-3-3.1-2.9c-0.1,0-0.1,0-0.2,0c-1.7-0.1-3.2,1.1-3.4,2.9c0,0.1,0,0.2,0,0.2H10C10.2,9.4,12.1,7.1,15.8,7.1"></path></svg>
                <p>Help</p>
                </div>
            </div>
        </div>
    )
}