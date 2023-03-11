import React from "react";
import SharedLayout from "../../layout/shared-layout";

const termsData = [
  {
    id: 1,
    heading: "Introduction",
    content:
      "The term Ouctopus or  we refers to the owner of the website. The term ‘you’ refers to the user or viewer of our website.",
  },
  {
    id: 2,
    heading: "Terms of Service:",
    content: [
      {
        id: "a",
        content: `The content of the pages of this website is for your general information and use only. It is subject to change without notice.`,
      },
      {
        id: "b",
        content: `rThis website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties;`,
      },
      {
        id: "c",
        content: `“Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.`,
      },
      {
        id: "d",
        content: `Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.`,
      },
      {
        id: "e",
        content: `This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.`,
      },
      {
        id: "f",
        content: `All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.`,
      },
      {
        id: "g",
        content: `Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.`,
      },
      {
        id: "h",
        content: `From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).`,
      },

    ],
  },
  {
    id: 3,
    heading: 'Acceptable use',
    content: [
      {
        content: "You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity."
      },
      {
        content: "You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software."
      },
      {
        content: "You must not conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to this website without Oct express written consent."
      },
      {
        content: "[You must not use this website to transmit or send unsolicited commercial communications.]"
      }
    ]
  },
  {
    id: 4,
    heading: "Restricted access",
    content: "[Access to certain areas of this website is restricted.]  Oct reserves the right to restrict access to [other] areas of this website, or indeed this entire website, at Oct discretion."
  },
  {
    id: 5,
    heading: "User content",
    content: [
      {
        content: "In these terms and conditions, “your user content” means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this website, for whatever purpose."
      },
      {
        content: "You must not submit any user content to the website that is or has ever been the subject of any threatened or actual legal proceedings or other similar complaint."
      }
    ]
  },
  {
    id: 6,
    heading: "Law and jurisdiction",
    content: "These terms and conditions will be governed by and construed in accordance with [GOVERNING LAW], and any disputes relating to these terms and conditions will be subject to the [non-]exclusive jurisdiction of the courts of [JURISDICTION]."
  }
];

const TableContentData = [
  "Introduction",
  "In the Terms of Service",
  "Acceptable use",
  "Restricted access",
  "User content",
  "Law and jurisdiction"
];

const TermsService = () => {
  return (
    <SharedLayout title={"terms&service"}>
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-center mt-24">
          <p className="text-center text-transparent font-extrabold  text-[68px] bg-clip-text bg-gradient-to-r from-[#3E56F4] to-[#D153CE] z-100">
            Terms of Service
          </p>
        </div>
        <p className="text-center text-white mt-5 text-[24px]">
          Welcome to our website. If you continue to browse and use this website,
          <br /> you are agreeing to comply with and be bound by the following
          <br /> terms and conditions of use, which together with our privacy policy
          <br /> govern Blogs’s relationship with you in relation to this website.
          <br />If you disagree with any part of these terms and conditions,
          <br />please do not use our website.
        </p>
        <div className="md:flex justify-center mt-32">
          <div className="lg:w-[720px] ">
            <div className="pb-14">
              {termsData.map((data) => {
                return (
                  <div className="py-3" key={data?.id}>
                    <p className="text-white text-[30px] font-semibold">
                      {data?.id}. {data?.heading}
                    </p>
                    <div>
                      {data?.content?.constructor === Array ? (
                        <div className="py-3">
                          {data.id === 3 && (
                            <p className="text-white/[0.85] text-[18px] pt-2 leading-7">
                              Before continuing the following terms are key
                              principles for the oct Platform and any User
                              found being in breach of one or more, will have
                              their Account automatically removed from the
                              Platform:
                            </p>
                          )}
                          {data?.content?.map((item, i) => {
                            return (
                              <div
                                key={i}
                                className="text-white/[0.85] pt-1 flex text-[18px] ml-5 leading-7"
                              >
                                {item.id}.
                                <p className="ml-2">{item?.content}</p>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="text-white/[0.85] py-3 text-[18px] leading-7">
                          {data?.content}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="ml-10 pt-3 text-[16px] text-[#ffffff70] w-[280px]">
            <p className="text-transparent font-extrabold  text-[16px] bg-clip-text bg-gradient-to-r from-[#3E56F4] to-[#D153CE]">
              Table of contents
            </p>
            <div className="py-2 pb-4">
              {TableContentData.map((item, i) => (
                <p key={i} className="py-2">
                  {item}
                </p>
              ))}
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    </SharedLayout>
  );
};

export default TermsService;
