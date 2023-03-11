import React, { useState } from "react";
import ToggleSwitch from "../toggleButtons/ToggleSwitch";
import classes from "./actionmodal.module.css";

const ActionModal = (props) => {
  return (
    <>
      <div className={`relative w-full rounded-t-2xl z-[9999]`}>
        <div onClick={props.close} className={`${classes.backdrop} `}/>
        <div
          className={`${classes.actionDialogue} ${props.containerClass} ${
            props.bgColor !== undefined && props.bgColor
          }`}
        >
          {props.handle !== false && (
            <div
              className="bg-white rounded h-1 w-[15%] absolute left-[43%] right-[43%] top-6 z-50"
              onClick={props.close}
            />
          )}
          {props.children === undefined ? (
            <div className="mt-6">
              {props?.modalData?.map((data, i) => {
                return (
                    <>
           {data?.visible !== false && <div className="flex justify-between" key={i}>
                    <div
                      className="flex items-center mb-6 cursor-pointer"
                      onClick={() =>
                        props?.creatorLiveSettings
                          ? props.creatorLiveSettings(data.name)
                          : data.onClick()
                      }
                    >
                      <div className="text-indigo-500">{data.icon}</div>
                      <a
                        target="blank"
                        className="text-white font-normal text-sm ml-2"
                      >
                        {data.name}
                      </a>
                    </div>
                    <div className="">
                      {data.toggle && (
                        <ToggleSwitch
                          activeToggle={data.activeToggle}
                          setActiveToggle={() =>
                            props?.creatorLiveSettings
                              ? props.creatorLiveSettings(data.name)
                              : data.onClick()
                          }
                        />
                      )}
                    </div>
                  </div>}
                    </>
                );
              })}
            </div>
          ) : (
            <>{props.children}</>
          )}
        </div>
      </div>
    </>
  );
};

export default ActionModal;
