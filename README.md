# Benommeli Car Wash Services 

A responsive website for **Benommeli Car Wash Services**, a mobile car wash business that provides professional car cleaning services at the customer's location.

## Project Overview

Benommeli Car Wash Services is a mobile car wash website designed to give customers an easy way to: 

-Learn about the business
-View available car wash services
-Book a car wash
-Provide their contact information
-Provide their location
-Use their current GPS location
-Send their booking information through WhatsApp

The project currently uses **HTML, CSS and JavaScript** . A Java/Spring Boot backend and database will be added as a future stage of the project.

---
##  Features

###  Home Page

The home page contains:

- Company logo
- Navigation bar
- "Book Now" button
- Business phone number
- Hero section
- Background image
- Introduction to the mobile car wash service

---

### Car Wash Services

The website currently displays three main services:

#### Exterior Car Wash

Includes:

- Washing
- Drying
- Waxing
- Exterior cleaning

#### Interior Car Wash

Includes:

- Vacuuming
- Cleaning seats
- Dashboard cleaning
- Interior detailing

#### Full-Service Car Wash

Combines both:

- Exterior cleaning
- Interior cleaning
- Complete vehicle detailing

---

## 💰 Pricing

The website provides three main packages.

### Basic Wash

**Dry, Vacuum & Windows**

| Vehicle | Price |
|---|---:|
| Sedan | R100 |
| SUV & Double Cab | R150 |
| Van & Minibus | R170 |

---

### Super Wash

**Basic Wash + Tyre Shine**

| Vehicle | Price |
|---|---:|
| Sedan | R130 |
| SUV & Double Cab | R180 |
| Van & Minibus | R200 |

---

### Wash & Wax

**Super Wash + Wax**

| Vehicle | Price |
|---|---:|
| Sedan | R200 |
| SUV & Double Cab | R300 |
| Van & Minibus | R340 |

The **Super Wash** package is displayed as the most popular package.

---

##  Booking System

Customers can open the booking form by clicking the **Book Now** button.

The booking form collects:

- Customer name
- Phone number
- Vehicle type
- Selected package
- Location
- Booking date
- Booking time

The selected package is automatically placed into the booking form when a customer clicks **Book Now** from a pricing package.

For example:

```text
Basic Wash → Book Now
        ↓
Booking Form
        ↓
Selected Package: Basic Wash


