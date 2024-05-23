# Net Salary Calculator

This JavaScript function calculates the net salary of an employee based on their basic salary and benefits. It takes into account various deductions such as PAYE (Pay As You Earn) tax, NHIF (National Hospital Insurance Fund), and NSSF (National Social Security Fund) to determine the final net salary.

## Table of Contents

- [Introduction](#introduction)
- [Function Definition](#function-definition)
- [Tax Brackets and Rates](#tax-brackets-and-rates)
- [NHIF Rates](#nhif-rates)
- [NSSF Contribution](#nssf-contribution)
- [Usage](#usage)
- [Example](#example)
- [Output](#output)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The `calculateNetSalary` function computes the net salary by taking into account the basic salary and benefits provided. The function applies various deductions as per the tax and insurance regulations to compute the net salary.

## Function Definition

```javascript
function calculateNetSalary(basicSalary, benefits) {
    // Define the tax brackets and rates
    const taxBrackets = [
        { upTo: 24000, rate: 0.1 },
        { upTo: 32333, rate: 0.25 },
        { rate: 0.3 }  // Anything above 32333
    ];

    // NHIF rates based on gross salary
    const nhifRates = [
        { upTo: 5999, rate: 150 },
        { upTo: 7999, rate: 300 },
        { upTo: 11999, rate: 400 },
        { upTo: 14999, rate: 500 },
        { upTo: 19999, rate: 600 },
        { upTo: 24999, rate: 750 },
        { upTo: 29999, rate: 850 },
        { upTo: 34999, rate: 900 },
        { upTo: 39999, rate: 950 },
        { upTo: 44999, rate: 1000 },
        { upTo: 49999, rate: 1100 },
        { upTo: 59999, rate: 1200 },
        { upTo: 69999, rate: 1300 },
        { upTo: 79999, rate: 1400 },
        { upTo: 89999, rate: 1500 },
        { upTo: 99999, rate: 1600 },
        { rate: 1700 } // Anything above 99999
    ];

    // NSSF is calculated at 6% of gross salary, up to a maximum contribution
    const nssfRate = 0.06;
    const nssfMaxContribution = 1800;

    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE
    let taxableIncome = grossSalary;
    let paye = 0;

    for (const bracket of taxBrackets) {
        if (bracket.upTo) {
            if (taxableIncome <= bracket.upTo) {
                paye += taxableIncome * bracket.rate;
                break;
            } else {
                paye += bracket.upTo * bracket.rate;
                taxableIncome -= bracket.upTo;
            }
        } else {
            paye += taxableIncome * bracket.rate;
            break;
        }
    }

    // Calculate NHIF
    let nhifDeduction = 0;
    for (const rate of nhifRates) {
        if (rate.upTo) {
            if (grossSalary <= rate.upTo) {
                nhifDeduction = rate.rate;
                break;
            }
        } else {
            nhifDeduction = rate.rate;
        }
    }

    // Calculate NSSF
    const nssfDeduction = Math.min(grossSalary * nssfRate, nssfMaxContribution);

    // Calculate Net Salary
    const netSalary = grossSalary - paye - nhifDeduction - nssfDeduction;

    return {
        grossSalary: grossSalary,
        paye: paye,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        netSalary: netSalary
    };
}
