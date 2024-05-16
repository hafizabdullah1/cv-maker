import React, { useEffect } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { getUser } from '../Actions/action'
import { useDispatch, useSelector } from "react-redux";
import { ImStatsBars } from "react-icons/im";
import { FaGraduationCap } from "react-icons/fa6";
import { TbAwardFilled } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BsPersonWorkspace } from "react-icons/bs";


const PDFDownload = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUser(user.id));
  }, []);

  const createPDF = async () => {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${data.name}-CV.pdf`);
  };


  const skillsName = data?.skills?.name.split(",")
  const skillsPercentage = data?.skills?.percentage.split(",")

  return (
    <div className=" flex flex-col px-[40px]">
      <div id="pdf">
        <div className="flex justify-between bg-gradient-to-r from-[#49478C] to-[#9756FF] py-5 px-5">
          <div className="flex flex-col gap-y-[20px]">
            <div className="flex gap-[30px]">
              <img
                src={data?.image ? data?.image : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="}
                alt=""
                className="rounded-[10%] w-[150px] h-[150px]"
              />
              <div className="flex flex-col gap-y-[10px] pt-[10px]">
                <h1 className="text-[26px] font-bold text-white">
                  {data?.name}
                </h1>
                <p className="text-[14px] font-normal text-gray-200">
                  {data?.experienceinfo?.designation}
                </p>
              </div>
            </div>
            <p className="text-gray-200">{data?.summary?.summary}</p>
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <h2 className="text-white text-[26px]">Contact Info</h2>
            <p className="text-gray-200">{data?.phone}</p>
            <p className="text-gray-200">{data?.email}</p>
            <hr />
            <p className="w-[300px] text-gray-200">
              {data?.contactinfo?.address1}{" "}
              {data?.contactinfo?.address2},{" "}
              {data?.contactinfo?.country}
            </p>
          </div>
        </div>
        <div className="px-5">
          <div className="flex items-center gap-x-2  text-[26px] pt-[20px]">
            <h2>{<ImStatsBars />}</h2> <h2>Strengths & Skills</h2>
          </div>
          <hr className="mt-[10px]" />

          <div className="flex flex-wrap justify-between w-4/5 gap-y-[20px] pt-[20px]">
            <div className="flex flex-col gap-y-[20px] w-[300px]">
              {skillsName?.map((ele, i) => (
                <div key={i} className="flex justify-between">
                  <h2>{ele}</h2>
                </div>
              ))}
              {skillsPercentage?.map((ele, i) => (
                <div key={i} className="w-full h-1 bg-gray-200 rounded-md overflow-hidden">
                  <div
                    className="h-full bg-purple-700"
                    style={{ width: `${ele}%` }}
                  ></div>
                </div>
              ))}
            </div>
            {/* {data?.skills?.map((ele, i) => (
              <div key={i} className="flex flex-col gap-y-[20px] w-[300px]">
                <div className="flex justify-between">
                  <h2>{ele.name}</h2>
                  <h2>{ele.percentage}%</h2>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-md overflow-hidden">
                  <div
                    className="h-full bg-purple-700"
                    style={{ width: `${ele.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
        <div className="px-5">
          <h2 className="flex items-center gap-2 text-[26px] pt-[20px]">
            <FaGraduationCap />
            Academics
          </h2>
          <hr className="mt-[10px]" />
          <div className="flex w-5/5 justify-between pt-[20px]">
            <div className="flex flex-col gap-y-[10px] w-1/4">
              <h2 className="text-[16px] font-bold">Title</h2>
              <p className="text-[14px]">
                {data?.education?.degreetitle}
              </p>
            </div>
            <div className="flex flex-col gap-y-[10px] w-1/4">
              <h2 className="text-[16px] font-bold">Institute</h2>
              <p className="text-[14px]">
                {data?.education?.institute}
              </p>
            </div>
            <div className="flex flex-col gap-y-[10px] w-1/4">
              <h2 className="text-[16px] font-bold">Location</h2>
              <p className="text-[14px]">
                {data?.education?.location}
              </p>
            </div>
            <div className="flex flex-col gap-y-[10px] w-1/4">
              <h2 className="text-[16px] font-bold">Date</h2>
              <p className="text-[14px]">
                {data?.education?.yearcompletion}
              </p>
            </div>
          </div>
        </div>
        {data?.awards ? (

          <div className="px-5">
            <h2 className="flex items-center gap-2 text-[26px] pt-[20px]">
              <TbAwardFilled />
              Awards
            </h2>
            <hr className="mt-[10px]" />
            <div className="flex w-5/5 flex-col justify-between pt-[20px]">
              <div className="flex justify-between">
                <h2 className="text-[16px] font-bold w-1/4">Title</h2>
                <h2 className="text-[16px] font-bold w-1/4">Authority</h2>
                <h2 className="text-[16px] font-bold w-1/4">Link</h2>
                <h2 className="text-[16px] font-bold w-1/4">Date</h2>
              </div>
              {data?.awards.map((ele, i) => (
                <div
                  key={i}
                  className="flex pt-[10px] justify-between items-center"
                >
                  <p className="text-[14px] w-1/4">{ele.title}</p>
                  <p className="text-[14px] w-1/4">{ele.authority}</p>
                  <p className="text-[14px] w-1/4">{ele.award_url}</p>
                  <p className="text-[14px] w-1/4">{ele.date}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="px-5">
          <h2 className="flex items-center gap-2 text-[26px] pt-[20px]">
            <HiOutlineClipboardDocumentList />
            Work History
          </h2>
          <hr className="mt-[10px]" />
          <div className="flex w-5/5 flex-col justify-between pt-[20px]">
            <div className="flex justify-between">
              <h2 className="text-[16px] font-bold w-1/4">Company</h2>
              <h2 className="text-[16px] font-bold w-1/4">Designation</h2>
              <h2 className="text-[16px] font-bold w-1/4">Duration</h2>
              <h2 className="text-[16px] font-bold w-1/4">Location</h2>
            </div>
            <div
              className="flex pt-[10px] justify-between items-center"
            >
              <p className="text-[14px] w-1/4">{data?.workhistory?.company}</p>
              <p className="text-[14px] w-1/4">{data?.workhistory?.designation}</p>
              <p className="text-[14px] w-1/4">
                {data?.workhistory?.fromdate} to {data?.workhistory?.presentdate}
              </p>
              <p className="text-[14px] w-1/4">{data?.workhistory?.city}</p>

            </div>
            {/* {data?.workhistory?.map((ele, i) => (
              <div
                key={i}
                className="flex pt-[10px] justify-between items-center"
              >
                <p className="text-[14px] w-1/4">{ele.company}</p>
                <p className="text-[14px] w-1/4">{ele.designation}</p>
                <p className="text-[14px] w-1/4">
                  {ele.fromdate} to {ele.presentdate}
                </p>
                <p className="text-[14px] w-1/4">{ele.city}</p>

              </div>
            ))} */}
          </div>
        </div>

        <div className="px-5">
          <h2 className="flex items-center gap-2 text-[26px] pt-[20px]">
            <BsPersonWorkspace />
            Project
          </h2>
          <hr className="mt-[10px]" />
          <div className="flex w-5/5 flex-col justify-between pt-[20px]">
            <div className="flex justify-between">
              <h2 className="text-[16px] font-bold w-1/6">Title</h2>
              <h2 className="text-[16px] font-bold w-1/6">Company</h2>
              <h2 className="text-[16px] font-bold w-1/6">Duration</h2>
              <h2 className="text-[16px] font-bold w-1/6">Projectlink</h2>
              <h2 className="text-[16px] font-bold w-1/6">Tools</h2>
            </div>
            <div
              className="flex pt-[10px] justify-between items-center">
              <p className="text-[14px] w-1/6">{data?.project?.projecttitle}</p>
              <p className="text-[14px] w-1/6">{data?.project?.company}</p>
              <p className="text-[14px] w-1/6">{data?.project?.fromdate} to {data?.project?.presentdate}</p>
              <p className="text-[14px] w-1/6">{data?.project?.projectlink}</p>
              <p className="text-[14px] w-1/6">{data?.project?.tool}</p>
            </div>
            {/* {data?.project?.map((ele, i) => (
              <div
                key={i}
                className="flex pt-[10px] justify-between items-center"
              >
                <p className="text-[14px] w-1/6">{ele.projecttitle}</p>
                <p className="text-[14px] w-1/6">{ele.company}</p>
                <p className="text-[14px] w-1/6">{ele.fromdate} to {ele.presentdate}</p>
                <p className="text-[14px] w-1/6">{ele.projectlink}</p>
                <p className="text-[14px] w-1/6">{ele.tool}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <button
        onClick={createPDF}
        type="button"
        className="bg-gradient-to-r from-[#49478C] to-[#9756FF] text-[20px] rounded-xl font-bold text-white my-10 px-20 py-3 self-center"
      >
        Export PDF
      </button>
    </div>
  );
};

export default PDFDownload;
