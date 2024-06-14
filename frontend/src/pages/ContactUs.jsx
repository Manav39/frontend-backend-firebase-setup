import * as React from "react";

function ContactUs(){
  return (
    <div className="flex flex-col bg-white">
      <div className="flex z-10 justify-center items-center px-16 py-5 w-full bg-white border-b border-solid backdrop-blur-[15px] border-black border-opacity-40 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center px-px w-full max-w-screen-xl max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1.5 self-stretch py-3 my-auto text-black whitespace-nowrap">
            <div className="grow text-2xl font-bold leading-10">largerthan</div>
            <div className="self-start text-2xl leading-10">i</div>
          </div>
          <div className="flex gap-5 justify-center self-stretch px-5 py-4 text-base font-medium text-zinc-600 max-md:flex-wrap">
            <div className="text-stone-950">Home</div>
            <div>About us</div>
            <div>What We Do</div>
            <div>Media</div>
            <div>Contact</div>
          </div>
          <div className="justify-center self-stretch px-8 py-3 my-auto text-base font-medium text-right text-white whitespace-nowrap bg-gray-800 rounded max-md:px-5">
            Donate
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start px-16 py-20 w-full bg-amber-100 max-md:px-5 max-md:max-w-full">
        <div className="mt-6 mb-4 ml-12 max-w-full w-[997px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-gray-800 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/762240a751cf47dfac607bc8b139686351e07ad7ad291bfadc36cf5a80278f90?apiKey=30d4071338e7485e977656a212aa2027&"
                  className="border-2 border-gray-800 border-solid aspect-[33.33] stroke-[2px] stroke-gray-800 w-[72px]"
                />
                <div className="flex flex-col items-start pl-20 mt-12 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-6xl font-bold leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    We'd love to hear from you
                  </div>
                  <div className="mt-6 text-base leading-7 max-md:max-w-full">
                    Have any question in mind or want to enquire? Please feel
                    free to contact us through the form or the following
                    details.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-gray-800 max-md:mt-10">
                <div className="flex gap-5 items-start">
                  <div className="flex flex-col self-start">
                    <div className="text-2xl font-bold leading-10">
                      Let's talk!{" "}
                    </div>
                    <div className="mt-7 text-base leading-7">
                      +234 09012346514
                    </div>
                  </div>
                  <div className="flex-auto self-end mt-12 text-base leading-7 max-md:mt-10">
                    hello@largerthani.com
                  </div>
                </div>
                <div className="shrink-0 mt-5 h-px border border-solid bg-neutral-200 border-neutral-200" />
                <div className="mt-10 text-xl font-bold leading-8">
                  Headoffice
                </div>
                <div className="mt-6 text-base leading-7 text-zinc-600">
                  8 Brewery Drive, Lagos, <br />
                  Nigeria.
                </div>
                <div className="mt-11 text-xl font-bold leading-8 max-md:mt-10">
                  Branch Office
                </div>
                <div className="mt-6 mr-6 text-base leading-7 text-zinc-600 max-md:mr-2.5">
                  Opp Opolo round about, Yenagoa, Bayelsa,
                  <br />
                  Nigeria
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/18251c67b75688b8eccbe9eb22d27711b4ea2b4a77f578d36d4b1cbe91c8c70d?apiKey=30d4071338e7485e977656a212aa2027&"
                  className="mt-9 max-w-full aspect-[5] w-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-center px-5 mt-24 max-w-full w-[769px] max-md:mt-10">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xs font-bold leading-5 text-gray-800 max-md:mt-8">
                <div>First Name</div>
                <div className="mt-5 text-base">John</div>
                <div className="shrink-0 mt-3 h-px bg-black border border-black border-solid" />
                <div className="mt-9">Email Id</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xs font-bold leading-5 text-gray-800 max-md:mt-8">
                <div>Last Name</div>
                <div className="mt-5 text-base">Doe</div>
                <div className="shrink-0 mt-3 h-px bg-black border border-black border-solid" />
                <div className="mt-9">Subject</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-4 text-base leading-6 text-gray-800 whitespace-nowrap max-md:flex-wrap">
          <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
            <div>johndoe@gmail.com</div>
            <div className="shrink-0 mt-2 h-px bg-black border border-black border-solid" />
          </div>
          <div className="shrink-0 self-end mt-6 max-w-full h-px bg-black border border-black border-solid w-[369px]" />
        </div>
        <div className="mt-9 text-xs font-bold leading-5 text-gray-800 max-md:max-w-full">
          Message
        </div>
        <div className="items-start px-5 pt-7 pb-24 mt-2 text-base leading-6 text-gray-800 rounded border border-black border-solid max-md:max-w-full">
          Type your Messege
        </div>
        <div className="justify-center self-center px-8 py-4 mt-8 text-base font-medium text-right text-black bg-amber-300 rounded backdrop-blur-2xl max-md:px-5">
          Send message
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/26406c9ec46084d0e1c81564439f684e9eb4e6b07aa81767f665ca5943bdf36b?apiKey=30d4071338e7485e977656a212aa2027&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/26406c9ec46084d0e1c81564439f684e9eb4e6b07aa81767f665ca5943bdf36b?apiKey=30d4071338e7485e977656a212aa2027&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/26406c9ec46084d0e1c81564439f684e9eb4e6b07aa81767f665ca5943bdf36b?apiKey=30d4071338e7485e977656a212aa2027&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/26406c9ec46084d0e1c81564439f684e9eb4e6b07aa81767f665ca5943bdf36b?apiKey=30d4071338e7485e977656a212aa2027&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/26406c9ec46084d0e1c81564439f684e9eb4e6b07aa81767f665ca5943bdf36b?apiKey=30d4071338e7485e977656a212aa2027&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/26406c9ec46084d0e1c81564439f684e9eb4e6b07aa81767f665ca5943bdf36b?apiKey=30d4071338e7485e977656a212aa2027&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/26406c9ec46084d0e1c81564439f684e9eb4e6b07aa81767f665ca5943bdf36b?apiKey=30d4071338e7485e977656a212aa2027&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/26406c9ec46084d0e1c81564439f684e9eb4e6b07aa81767f665ca5943bdf36b?apiKey=30d4071338e7485e977656a212aa2027&"
        className="mt-24 w-full aspect-[3.33] max-md:mt-10 max-md:max-w-full"
      />
      <div className="flex justify-center items-center px-16 py-20 w-full bg-stone-950 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between my-5 w-full max-w-screen-xl max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1.5 self-start text-white whitespace-nowrap">
            <div className="grow text-2xl font-bold leading-10">largerthan</div>
            <div className="text-2xl leading-10">i</div>
          </div>
          <div className="flex gap-5 justify-between items-start mt-1 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col text-sm leading-6 text-white">
              <div className="text-base font-bold">Home</div>
              <div className="mt-10">About us</div>
              <div className="mt-9">Team</div>
              <div className="mt-9">What we do</div>
              <div className="mt-9">Contact</div>
            </div>
            <div className="flex flex-col self-stretch text-sm leading-6 text-white whitespace-nowrap">
              <div className="text-base font-bold">More</div>
              <div className="mt-10">Projects</div>
              <div className="mt-8">Events</div>
              <div className="mt-9">Donate</div>
              <div className="mt-9">Blog</div>
            </div>
            <div className="flex flex-col text-sm leading-6 text-white">
              <div className="text-base font-bold">Connect </div>
              <div className="mt-10">Facebook</div>
              <div className="mt-9">Instagram</div>
              <div className="mt-8">Twitter</div>
              <div className="mt-9">Linkdin </div>
            </div>
            <div className="flex flex-col mt-1.5 max-md:max-w-full">
              <div className="text-4xl font-bold text-white leading-[56px] max-md:max-w-full">
                Subscribe to get latest updates
              </div>
              <div className="flex gap-0 mt-10 text-base max-md:flex-wrap max-md:max-w-full">
                <div className="z-10 grow justify-center items-start px-6 py-7 rounded border border-solid border-indigo-50 border-opacity-30 text-indigo-50 text-opacity-30 w-fit max-md:px-5 max-md:max-w-full">
                  Your email
                </div>
                <div className="justify-center px-8 py-4 font-medium text-right text-gray-800 whitespace-nowrap bg-white rounded backdrop-blur-2xl max-md:px-5">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;