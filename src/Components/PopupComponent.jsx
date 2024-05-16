import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBasicInfo ,getUser} from "../Actions/action";

const PopupComponent = ({ state, setPopup, value }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  const { data } = useSelector((state) => state.user);

  const closePopup = () => {
    setPopup(false);
  };

  // useEffect(()=>{
    
  // },[value])

  // console.log(data[value],'value');

  useEffect(()=> {
    dispatch(getUser(user.id));
  },[])
  
  const [currentInput, setCurrent] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrent({
      ...currentInput,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    let payload;

    // if (value === "skills") {
    //   const existingSkills = data?.skills || [];
    //   payload = { [value]: [...existingSkills, currentInput] };
    // }
    // if (value === "hobbies"){
    //   const existinghobbies = data?.hobbies || [];
    //   payload = { [value]: [...existinghobbies, currentInput] };
    // }
    if (value === "languages"){
      const existinglanguages = data?.languages || [];
      payload = { [value]: [...existinglanguages, currentInput] };
    } 
    else {
      payload = {[value]: currentInput};
    }


    dispatch(addBasicInfo({...user, ...payload}));
    setCurrent({});
    setPopup(false)
  };

  const renderPopupContent = () => {
    switch (value) {
      case "basic":
        return (
          <div className=" flex flex-col justify-center w-[680px]">
            <h2 className="self-center text-[26px] font-bold pb-[30px]">
              Basic Information
            </h2>
            <div className="flex flex-wrap  justify-between gap-y-[10px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  First Name<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="f_name"
                  value={currentInput.f_name}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Last Name<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="l_name"
                  value={currentInput.l_name}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px]  text-[14px] rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Date of Birth
                  <span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="DOB"
                  value={currentInput.DOB}
                  onChange={handleChange}
                  className="w-[320px]  py-2 px-[16px] text-[14px] rounded-xl border border-[#B0B0B0]"
                  type="date"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Degree Level
                  <span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <select
                  id="degree"
                  name="degree"
                  value={currentInput.degree}
                  onChange={handleChange}
                  className="w-[320px] py-2 px-[16px] text-[14px] rounded-xl border border-[#B0B0B0]"
                >
                  <option value="matriculation">Matriculation</option>
                  <option value="olevel">O Level</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="graduation">Graduation</option>
                  <option value="master">Master's Degree</option>
                  <option value="doctorate">Doctorate Degree</option>
                </select>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h2 className="text-[14px] text-[#252525] font-normal">
                  Gender
                </h2>
                <div className="flex items-center gap-[25px]">
                  <div className="flex gap-[10px]">
                    <input
                      name="gender"
                      value="male"
                      onChange={handleChange}
                      className=" rounded-xl"
                      type="radio"
                    />
                    <label className="text-[16px]">Male</label>
                  </div>
                  <div className="flex gap-[10px]">
                    <input
                      name="gender"
                      value="female"
                      onChange={handleChange}
                      className=" rounded-xl"
                      type="radio"
                    />
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "credentials":
        return (
          <div className="flex flex-col gap-y-[10px]">
            <h2 className="self-center text-[26px] font-bold">
              Registration Email
            </h2>
            <div className="flex flex-col gap-y-[8px]">
              <label htmlFor="Email" className="text-[14px]">
                Registration Email
              </label>
              <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Enter your registration email"
                className="w-[680px] py-2 bg-[#B0B0B0] rounded-xl px-5 placeholder:text-[#828282]"
              />
            </div>
            <div className="flex flex-col gap-y-[8px]">
              <label htmlFor="password" className="text-[14px]">
                Change Password
              </label>
              <input
                type="text"
                name="passowrd"
                id="password"
                className="border border-[#B0B0B0] w-[680px] py-2 rounded-xl px-5"
              />
            </div>
          </div>
        );

      case "profilelink":
        return (
          <div className="flex flex-col gap-y-[10px]">
            <h2 className="self-center text-[26px] font-bold">
              Public Profile Links
            </h2>
            <p className="self-center tracking-[2px]">
              Link your linkedIn profile link
            </p>

            <div className="flex flex-col gap-y-[8px]">
              <label htmlFor="password" className="text-[14px]">
                LinkedIn Profile
              </label>
              <input
                type="text"
                name="link"
                id=""
                onChange={handleChange}
                className="border border-[#B0B0B0] w-[680px] py-2 rounded-xl px-5"
              />
            </div>
          </div>
        );

      case "education":
        return (
          <div className=" flex flex-col justify-center w-[680px] pb-[30px]">
            <h2 className="self-center text-[26px] font-bold pb-[30px]">
              Education
            </h2>
            <div className="flex flex-wrap  justify-between gap-y-[10px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Degree Title
                  <span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="degreetitle"
                  value={currentInput.degreetitle}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Degree Level
                  <span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <select
                  id="degree"
                  name="degreelevel"
                  value={currentInput.degreelevel}
                  onChange={handleChange}
                  className="w-[320px] py-2 px-[16px] text-[14px] rounded-xl border border-[#B0B0B0]"
                >
                  <option value="matriculation">Matriculation</option>
                  <option value="olevel">O Level</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="graduation">Graduation</option>
                  <option value="master">Master's Degree</option>
                  <option value="doctorate">Doctorate Degree</option>
                </select>
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Majors
                  <span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="majors"
                  value={currentInput.majors}
                  onChange={handleChange}
                  className="w-[320px]  py-2 px-[16px] text-[14px] rounded-xl border border-[#B0B0B0]"
                  type="number"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Year Completion
                  <span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="yearcompletion"
                  value={currentInput.yearcompletion}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="Month / Year"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Institute<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="institute"
                  value={currentInput.institute}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="Institute name"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Location<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="location"
                  value={currentInput.location}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="Institute Location"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <h2 className="text-[14px] text-[#252525] font-normal">
                  Result Type
                </h2>
                <div className="flex items-center gap-[25px]">
                  <div className="flex gap-[10px]">
                    <input
                      name="result"
                      value="CGPA"
                      onChange={handleChange}
                      className=" rounded-xl"
                      type="radio"
                    />
                    <label className="text-[16px]">CGPA</label>
                  </div>
                  <div className="flex gap-[10px]">
                    <input
                      name="result"
                      value="percentage"
                      onChange={handleChange}
                      className=" rounded-xl"
                      type="radio"
                    />
                    <label>Percentage</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  CGPA / Percentage
                  <span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="cgpa_percentage"
                  value={currentInput.cgpa_percentage}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="CGPA / Percentage"
                />
              </div>
            </div>
          </div>
        );

      case "industry":
        return (
          <div className="flex flex-col gap-y-[10px] pb-[30px]">
            <h2 className="self-center text-[26px] font-bold">
              Industry Experience
            </h2>

            <div className="flex flex-col gap-y-[8px]">
              <label htmlFor="" className="text-[14px]">
                Industry
              </label>
              <input
                type="text"
                name="industry"
                id=""
                placeholder="Enter Industry"
                onChange={handleChange}
                className="border border-[#B0B0B0] w-[680px] py-2 rounded-xl px-5"
              />
            </div>
          </div>
        );

      case "awards":
        return (
          <div className=" flex flex-col justify-center w-[680px] pb-[30px]">
            <h2 className="self-center text-[26px] font-bold pb-[30px]">
              Awards
            </h2>
            <div className="flex flex-wrap  justify-between gap-y-[10px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Title<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="title"
                  value={currentInput.title}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Authority
                </label>
                <input
                  name="authority"
                  value={currentInput.authority}
                  onChange={handleChange}
                  className="w-[320px]  py-2 px-[16px] text-[14px] rounded-xl border border-[#B0B0B0]"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Date
                </label>
                <input
                  name="date"
                  value={currentInput.date}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="Month / Year"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Award URL
                </label>
                <input
                  name="award_url"
                  value={currentInput.award_url}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        );

      case "summary":
        return (
          <div className="flex flex-col gap-y-[10px] pb-[30px]">
            <h2 className="self-center text-[26px] font-bold">Summary</h2>

            <div className="flex flex-col gap-y-[8px]">
              <textarea
                name="summary"
                value={currentInput.summary}
                id=""
                cols="30"
                rows="10"
                className="border border-[#B0B0B0] w-[680px] py-2 rounded-xl px-5"
                onChange={handleChange}
              ></textarea>
              <p className="text-[12px] text-[#373737] font-normal">
                *Phone numbers and email addresses are not allowed in this
                field.Any contact information will be omitted.
              </p>
            </div>
          </div>
        );

      case "workhistory":
        return (
          <div className=" flex flex-col justify-center w-[680px] pb-[20px]">
            <h2 className="self-center text-[26px] font-bold pb-[30px]">
              Work History
            </h2>
            <div className="flex flex-wrap  justify-between gap-y-[10px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Job Title<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="designation"
                  value={currentInput.designation}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="Designation"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Company<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="company"
                  value={currentInput.company}
                  onChange={handleChange}
                  className="w-[320px]  py-2 px-[16px] text-[14px] rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="company name"
                />
              </div>
              <div className="flex flex-col gap-[8px] w-[320px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Duration
                </label>
                <div className="flex gap-x-[20px]">
                  <input
                    name="fromdate"
                    value={currentInput.fromdate}
                    onChange={handleChange}
                    className="w-[] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                    type="date"
                  />
                  <label className="absolute top-2 left-4 text-[14px] text-[#B0B0B0] pointer-events-none">
                    From
                  </label>
                  <input
                    name="presentdate"
                    value={currentInput.presentdate}
                    onChange={handleChange}
                    className="w-[] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                    type="date"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Reference Email
                </label>
                <input
                  name="refemail"
                  value={currentInput.refemail}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="email"
                  placeholder="Email address"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Reference Number
                </label>
                <input
                  name="refnumber"
                  value={currentInput.refnumber}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="number"
                  placeholder="Cell number"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Enter Country
                </label>
                <input
                  name="country"
                  value={currentInput.country}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="Country"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Enter City
                </label>
                <input
                  name="city"
                  value={currentInput.city}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="City"
                />
              </div>
              <div className="flex flex-col gap-y-[8px] pt-5">
              <textarea
                name="remarks"
                value={currentInput.remarks}
                id=""
                cols="30"
                rows="5"
                className="border border-[#B0B0B0] w-[680px] py-2 rounded-xl px-5"
                onChange={handleChange}
              ></textarea>
              <p className="text-[12px] text-[#373737] font-normal">
                *Phone numbers and email addresses are not allowed in this
                field.Any contact information will be omitted.
              </p>
            </div>
            </div>
          </div>
        );

        case "project":
        return (
          <div className=" flex flex-col justify-center w-[680px] pb-[20px]">
            <h2 className="self-center text-[26px] font-bold pb-[30px]">
              Projects
            </h2>
            <div className="flex flex-wrap  justify-between gap-y-[10px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Project Title<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="projecttitle"
                  value={currentInput.projecttitle}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="Title of a project"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Company<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="company"
                  value={currentInput.company}
                  onChange={handleChange}
                  className="w-[320px]  py-2 px-[16px] text-[14px] rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="company name"
                />
              </div>
              <div className="flex flex-col gap-[8px] w-[320px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Duration
                </label>
                <div className="flex gap-x-[20px]">
                  <input
                    name="fromdate"
                    value={currentInput.fromdate}
                    onChange={handleChange}
                    className="w-[] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                    type="date"
                  />
                  <label className="absolute top-2 left-4 text-[14px] text-[#B0B0B0] pointer-events-none">
                    From
                  </label>
                  <input
                    name="presentdate"
                    value={currentInput.presentdate}
                    onChange={handleChange}
                    className="w-[] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                    type="date"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Project URL
                </label>
                <input
                  name="projectlink"
                  value={currentInput.projectlink}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="Web link"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Client / Customer Name
                </label>
                <input
                  name="customername"
                  value={currentInput.customername}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="Full name"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Client / Customer URL
                </label>
                <input
                  name="customer_url"
                  value={currentInput.customer_url}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="Email or web link"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Tools
                </label>
                <input
                  name="tool"
                  value={currentInput.tool}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col gap-y-[8px] pt-5">
              <textarea
                name="remarks"
                value={currentInput.remarks}
                id=""
                cols="30"
                rows="5"
                className="border border-[#B0B0B0] w-[680px] py-2 rounded-xl px-5"
                onChange={handleChange}
              ></textarea>
              <p className="text-[12px] text-[#373737] font-normal">
                *Phone numbers and email addresses are not allowed in this
                field.Any contact information will be omitted.
              </p>
            </div>
            </div>
          </div>
        );

        case "certification":
        return (
          <div className=" flex flex-col justify-center w-[680px] pb-[20px]">
            <h2 className="self-center text-[26px] font-bold pb-[30px]">
              Certifications
            </h2>
            <div className="flex flex-wrap  justify-between gap-y-[10px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Certification Name<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="name"
                  value={currentInput.name}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="Title of a project"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                License Number/Enrollment Number
                </label>
                <input
                  name="licenseno"
                  value={currentInput.licenseno}
                  onChange={handleChange}
                  className="w-[320px]  py-2 px-[16px] text-[14px] rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="License number"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                Certification Authority
                </label>
                <input
                  name="authority"
                  value={currentInput.authority}
                  onChange={handleChange}
                  className="w-[320px]  py-2 px-[16px] text-[14px] rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                Certification URL
                </label>
                <input
                  name="certification_url"
                  value={currentInput.certification_url}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="Certificate link"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                Completion Date
                </label>
                <input
                  name="completion_date"
                  value={currentInput.completion_date}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="date"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Certificate expiry date
                </label>
                <input
                  name="expirydate"
                  value={currentInput.expirydate}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="date"
                  placeholder="Email or web link"
                />
              </div>
             
            </div>
          </div>
        );

        case "Preferred_job_city":
        return (
          <div className="flex flex-col gap-y-[10px] pb-[30px]">
            <h2 className="self-center text-[26px] font-bold">
            Preferred Job City
            </h2>

            <div className="flex flex-col gap-y-[8px]">
              <label htmlFor="" className="text-[14px]">
              Enter your Preferred Job Location
              </label>
              <input
                type="text"
                name="city"
                id=""
                placeholder="City"
                onChange={handleChange}
                className="border border-[#B0B0B0] w-[680px] py-2 rounded-xl px-5"
              />
            </div>
          </div>
        );

        case "hobbies":
        return (
          <div className="flex flex-col gap-y-[10px] pb-[30px]">
            <h2 className="self-center text-[26px] font-bold">
            Hobbies/Extra Activities
            </h2>

            <div className="flex flex-col gap-y-[8px]">
              <label htmlFor="" className="text-[14px]">
              Enter your Hobbies or Extra Activities Below
              </label>
              <input
                type="text"
                name="hobby"
                id=""
                placeholder="Type here"
                onChange={handleChange}
                className="border border-[#B0B0B0] w-[680px] py-2 rounded-xl px-5"
              />
            </div>
          </div>
        );

        case "languages":
        return (
          <div className="flex flex-col gap-y-[10px] pb-[30px]">
            <h2 className="self-center text-[26px] font-bold">
            Languages
            </h2>

            <div className="flex flex-col gap-y-[8px]">
              <label htmlFor="" className="text-[14px]">
              Enter your languages below
              </label>
              <input
                type="text"
                name="language"
                id=""
                placeholder="language"
                onChange={handleChange}
                className="border border-[#B0B0B0] w-[680px] py-2 rounded-xl px-5"
              />
            </div>
          </div>
        );

        case "reference":
        return (
          <div className=" flex flex-col justify-center w-[680px] pb-[30px]">
            <h2 className="self-center text-[26px] font-bold pb-[30px]">
              Refrences
            </h2>
            <div className="flex flex-wrap  justify-between gap-y-[10px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Name<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="name"
                  value={currentInput.name}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Company<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="company"
                  value={currentInput.company}
                  onChange={handleChange}
                  className="w-[320px]  py-2 px-[16px] text-[14px] rounded-xl border border-[#B0B0B0]"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Email<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="email"
                  value={currentInput.email}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder="Month / Year"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Contact No<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="contact_no"
                  value={currentInput.contact_no}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        );

        case "skills":
        return (
          <div className=" flex flex-col justify-center w-[680px] pb-[30px]">
            <h2 className="self-center text-[26px] font-bold pb-[30px]">
              Skills
            </h2>
            <div className="flex flex-wrap  justify-between gap-y-[10px]">
              <div className="flex flex-col gap-[8px] relative">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Skill Name<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="name"
                  value={currentInput.name}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder=""
                />
                <p className="text-[#767676] text-xs italic absolute -bottom-5 left-0 truncate">
                  <span className="text-red-500">*</span>Note:Please use comma separated values (eg. HTML,CSS,JavaScript,PHP) and also <span className="text-red-500">*</span>percentage (e.g 50,60,30,85)</p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Skill Percentage<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="percentage"
                  value={currentInput.percentage}
                  onChange={handleChange}
                  className="w-[320px]  py-2 px-[16px] text-[14px] rounded-xl border border-[#B0B0B0]"
                  type="text"
                />
              </div>
            </div>
          </div>
        );


      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {state && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div
            className="bg-white max-h-[95%] scroll px-10 pt-2 pb-10 rounded-xl shadow-lg z-10 flex flex-col"
            style={{ boxShadow: "0px 10px 40px 0px #8552E51A" }}
          >
            <button
              className="cursor-pointer text-2xl text-gray-700 self-end"
              onClick={closePopup}
            >
              x
            </button>
            {renderPopupContent()}
            <div className="flex justify-between pt-[20px]">
              <button className="py-2 w-[323px] font-bold text-[14px] border border-[#635EA3] text-[#635EA3] rounded-xl">
                Previous
              </button>
              <button
                className="py-2 w-[323px] text-[14px] font-bold text-white bg-gradient-to-r from-[#49478C] to-[#9756FF] rounded-xl"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupComponent;
