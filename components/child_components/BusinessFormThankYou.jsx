import axios from 'axios';
import React, { useCallback, useEffect } from 'react'
import { useRouter } from "next/router";

export const BusinessFormThankYou = () => {
    const router = useRouter();

    const postData = useCallback(async (formData) => {
        try {
            const response = await axios.post('/api/businessForm', formData);
            if (response.data.success) {
                router.push("/thank-you");
            }
        } catch (error) {
            console.error('Error fetching initial data:', error);
        }
    }, [router]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        await postData(data);
    };

    useEffect(() => {
        const prevBtns = document.querySelectorAll(".btn-prev");
        const nextBtns = document.querySelectorAll(".btn-next");
        const progress = document.getElementById("progress");
        const formSteps = document.querySelectorAll(".form-step");
        const progressSteps = document.querySelectorAll(".progress-step");
        let formStepsNum = 0;

        nextBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                formStepsNum++;
                updateFormSteps();
                updateProgressbar();
            });
        });

        prevBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                formStepsNum--;
                updateFormSteps();
                updateProgressbar();
            });
        });

        function updateFormSteps() {
            formSteps.forEach((formStep) => {
                formStep.classList.contains("form-step-active") &&
                    formStep.classList.remove("form-step-active");
            })

            formSteps[formStepsNum].classList.add("form-step-active");
        }

        function updateProgressbar() {
            progressSteps.forEach((progressStep, idx) => {
                if (idx < formStepsNum + 1) {
                    progressStep.classList.add("progress-step-active");
                } else {
                    progressStep.classList.remove("progress-step-active");
                }
            });

            const progressActive = document.querySelectorAll(".progress-step-active");

            progress.style.width =
                ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
        }
    }, [])


    return (
        <div className='business-form'>
            <form onSubmit={handleSubmit} className="form">
                <h4 class="text-center">Fill in the bellow details to know which business structure suits you best</h4>
                <div class="progressbar">
                    <div class="progress" id="progress"></div>

                    <div class="progress-step progress-step-active" data-title=""></div>
                    <div class="progress-step" data-title=""></div>
                    <div class="progress-step" data-title=""></div>
                    <div class="progress-step" data-title=""></div>
                </div>

                <div className='white-bg'>
                    <div class="form-step form-step-active">
                        <h3>Proposed Name Of Business</h3>
                        <div class="input-group">
                            <input type="text" name="Proposed Name Of Business" id="Proposed-Name-Of-Business" placeholder='Type your business name here..' />
                        </div>
                        <div class="">
                            <a href="#" class="btn btn-next">Next</a>
                        </div>
                    </div>
                    <div class="form-step">
                        <h3>Number of Partners</h3>
                        <div class="input-group">
                            <input type="number" name="Number of Partners" id="Number-of-Partners" placeholder='Number of Partners' />
                        </div>
                        <div class="btns-group">
                            <a href="#" class="btn btn-prev">Previous</a>
                            <a href="#" class="btn btn-next">Next</a>
                        </div>
                    </div>
                    <div class="form-step">
                        <h3>State of Incorporation</h3>
                        <div class="input-group">
                            <select name="State of Incorporation">
                                <option value="">--State--</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>s
                            </select>
                        </div>
                        <div class="btns-group">
                            <a href="#" class="btn btn-prev">Previous</a>
                            <a href="#" class="btn btn-next">Next</a>
                        </div>
                    </div>
                    <div class="form-step">
                        <h3>Personal Detail</h3>
                        <div class="input-group">
                            <label for="name">Name</label>
                            <input type="text" name="Name" id="Name" placeholder='Type your name here..' required />
                        </div>
                        <div class="input-group">
                            <label for="email">Email</label>
                            <input type="email" name="Email" id="email" placeholder='Email Id' required />
                        </div>
                        <div class="input-group">
                            <label for="phone">Phone</label>
                            <input type="tel" name="Phone" id="phone" placeholder='Mobile No' maxlength='10' required />
                        </div>
                        <div class="btns-group">
                            <a href="#" class="btn btn-prev">Previous</a>
                            <input type="submit" value="Submit" class="btn" />
                        </div>
                    </div>
                </div>
                {/* <div class="form-step">
                        <div class="input-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div class="input-group">
                            <label for="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" />
                        </div>
                        <div class="input-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" id="username" />
                        </div>
                        <div class="input-group">
                            <label for="phone">Phone</label>
                            <input type="text" name="phone" id="phone" />
                        </div>
                        <div class="input-group">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div class="input-group">
                            <label for="dob">Date of Birth</label>
                            <input type="date" name="dob" id="dob" />
                        </div>
                        <div class="input-group">
                            <label for="ID">National ID</label>
                            <input type="number" name="ID" id="ID" />
                        </div>
                    </div> */}
            </form>
        </div>
    )
}
