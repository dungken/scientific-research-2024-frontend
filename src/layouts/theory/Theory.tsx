function Theory() {
    return (
        <div className="container p-5 d-flex align-items-start" style={{minHeight: '700px'}}>
            <ul className="nav nav-pills flex-column nav-pills border-end border-3 me-3 align-items-end" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-primary fw-semibold active position-relative" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-primary fw-semibold position-relative" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-primary fw-semibold position-relative" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                </li>
            </ul>
            <div className="tab-content border rounded-3 border-primary p-3 text-danger w-100" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <h2>Home</h2>
                    <p>Please check our more design @ <a target="_blank" href="https://codepen.io/Gaurav-Rana-the-reactor">Codepen</a></p>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <h2>Profile</h2>
                    <p>Please check our more design @ <a target="_blank" href="https://codepen.io/Gaurav-Rana-the-reactor">Codepen</a></p>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <h2>Contact</h2>
                    <p>Please check our more design @ <a target="_blank" href="https://codepen.io/Gaurav-Rana-the-reactor">Codepen</a></p>
                </div>
            </div>
        </div>
    )
}

export default Theory;