"use client"
import React from "react"

import dbIcon from "../../assets/comprehensiveIcon/dbicon.svg"
import actionIcon from "../../assets/comprehensiveIcon/action.svg"
import approvalIcon from "../../assets/comprehensiveIcon/approve.svg"
import policyIcon from "../../assets/comprehensiveIcon/policy.svg"
import automationIcon from "../../assets/comprehensiveIcon/runs.svg"
import overrideIcon from "../../assets/comprehensiveIcon/overrides.svg"
import totalIcon from "../../assets/comprehensiveIcon/events.svg"

export default function ComprehensiveAuditLogging() {
  const stats = [
    {
      icon: actionIcon,
      count: 0,
      label: "Actions",
      color: "#00A63E"
    },
    {
      icon: approvalIcon,
      count: 0,
      label: "Approvals",
      color: "#155DFC"
    },
    {
      icon: policyIcon,
      count: 0,
      label: "Policy Decisions",
      color: "#9810FA"
    },
    {
      icon: automationIcon,
      count: 0,
      label: "Automation Runs",
      color: "#F54900"
    },
    {
      icon: overrideIcon,
      count: 0,
      label: "Overrides",
      color: "#E7000B"
    },
    {
      icon: totalIcon,
      count: 10,
      label: "Total Events",
      color: "#4A5565"
    }
  ]

  return (
    <div className="border-[1.6px] border-[#8EC5FF] rounded-[20px] p-6 bg-white mb-5">
      <div className="flex items-center gap-3 mb-6">
        <img src={dbIcon} alt="" className="w-6 h-6" />
        <h3 className="text-[20px] text-[#0A0A0A]">
          Comprehensive Audit Logging
        </h3>
      </div>

      <div className="grid xl:grid-cols-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#E8F1FF] rounded-[10px] p-4 text-center"
          >
            <img src={item.icon} alt="" className="mx-auto mb-3" />
            <p
              className="text-[24px] font-bold"
              style={{ color: item.color }}
            >
              {item.count}
            </p>
            <p
              className="text-[16px] font-bold"
              style={{ color: item.color }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 text-[#193CB8] text-[14px]">
        ✅
        <span>
          <span className="font-bold">Every event is logged:</span> Who did what,
          when, why, with full policy and approval chain traceability
        </span>
      </div>
    </div>
  )
}
