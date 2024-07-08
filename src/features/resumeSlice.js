import { createSlice } from "@reduxjs/toolkit";

export const resumeSlicer = createSlice({
  name: "resume",
  initialState: {
    personalInformation: {
      firstName: "",
      lastName: "",
      profession: "",
      address: "",
      city: "",
      state: "",
      zipCode: 0,
    },
    education: {
      institution: "",
      course: "",
      country: "",
      state: "",
      timePeriod: {
        start: "",
        finish: "",
      },
      currentStudy: false,
    },
    experience: {
      employer: "",
      company: "",
      address: "",
      role: "",
      timePeriod: {
        start: "",
        finish: "",
      },
      description: "",
    },
    contact: {
      email: "",
      phone: "",
      linkedIn: "",
      twitter: "",
      instagram: "",
      portfolio: "",
      github: "",
    },
    award: {
      organization: "",
      title: "",
      date: "",
      description: "",
    },
  },
  reducers: {
    updatePersonaInfo: (state) => {
      const newData = {
        firstName: state.firstName,
        lastName: state.lastName,
        profession: state.profession,
        address: state.adress,
        city: state.city,
        state: state.state,
        zipCode: state.zipCode,
      };
      state.personalInformation = newData;
    },
    updateEducation: (state) => {
      const newData = {
        employer: state.employer,
        course: state.course,
        country: state.country,
        state: state.state,
        timePeriod: {
          start: state.timePeriod.start,
          finish: state.timePeriod.finish,
        },
        currentStudy: state.currentStudy,
      };
      state.education = newData;
    },
    updateExperience: (state) => {
      const newData = {
        employer: state.employer,
        company: state.company,
        address: state.address,
        role: state.role,
        timePeriod: {
          start: state.timePeriod.start,
          finish: state.timePeriod.finish,
        },
        description: state.description,
      };
      state.experience = newData;
    },
    updateContact: (state) => {
      const newData = {
        email: state.email,
        phone: state.phone,
        linkedIn: state.linkedIn,
        twitter: state.twitter,
        instagram: state.instagram,
        portfolio: state.portfolio,
        github: state.github,
      };
      state.contact = newData;
    },
    updateAward: (state) => {
      const newData = {
        organization: state.organization,
        title: state.title,
        date: state.date,
        description: state.description,
      };
      state.award = newData;
    },
  },
});

export const {
  updatePersonaInfo,
  updateEducation,
  updateExperience,
  updateContact,
  updateAward,
} = resumeSlicer.actions;

export default resumeSlicer.reducer;
