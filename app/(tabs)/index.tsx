import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Scope } from '@/components/scope';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import * as Print from 'expo-print';
import { Link } from 'expo-router';

import { useState } from 'react';
import { Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AlcoholConsumptionPicker from '../AlcoholConsumption';
import YesCheckbox from '../CheckBox';
import ClinicStamp from '../ClinicStampUpload';
import DatePicker from '../DatePicker';
import EmploymentStatusPicker from '../EmploymentStatus';
import GenderPicker from '../GenderPicker';
import SmokingStatusPicker from '../SmokingStatus';


export default function HomeScreen() {

  // Employee Information
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nric, setNric] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [dateOfExamination, setDateOfExamination] = useState('');

  // Medical History
  const [hypertension, setHypertension] = useState(false);
  const [hypertensionRemarks, setHypertensionRemarks] = useState('');
  const [diabetes, setDiabetes] = useState(false);
  const [diabetesRemarks, setDiabetesRemarks] = useState('');
  const [asthma, setAsthma] = useState(false);
  const [asthmaRemarks, setAsthmaRemarks] = useState('');
  const [heartDisease, setHeartDisease] = useState(false);
  const [heartDiseaseRemarks, setHeartDiseaseRemarks] = useState('');
  const [tuberculosis, setTuberculosis] = useState(false);
  const [tuberculosisRemarks, setTuberculosisRemarks] = useState('');
  const [allergy, setAllergy] = useState(false);
  const [allergyRemarks, setAllergyRemarks] = useState('');
  const [previousSurgery, setPreviousSurgery] = useState(false);
  const [previousSurgeryRemarks, setPreviousSurgeryRemarks] = useState('');
  const [currentMedication, setCurrentMedication] = useState('');
  const [smokingStatus, setSmokingStatus] = useState('');
  const [alcoholConsumption, setAlcoholConsumption] = useState('');

  // Physical Examination
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [pulseRate, setPulseRate] = useState('');
  const [temperature, setTemperature] = useState('');
  const [visionAssessment, setVisionAssessment] = useState('');
  const [generalAssessment, setGeneralAssessment] = useState('');
  const [cardiovascularAssessment, setCardiovascularAssessment] = useState('');
  const [respiratoryAssessment, setRespiratoryAssessment] = useState('');

  // Investigations
  const [urineFeme, setUrineFeme] = useState('');
  const [bloodGlucose, setBloodGlucose] = useState('');
  const [fbc, setFbc] = useState('');
  const [lipidProfile, setLipidProfile] = useState('');
  const [hepatitis, setHepatitis] = useState('');
  const [hiv, setHiv] = useState('');
  const [tumourMarker, setTumourMarker] = useState('');
  const [chestXRay, setChestXRay] = useState('');
  const [ecg, setEcg] = useState('');

  // Fitness Assessment
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [doctorRemarks, setDoctorRemarks] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [doctorMmc, setDoctorMmc] = useState('');

  const handleSubmit = async () => {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { font-family: Arial, sans-serif; padding: 40px; color: #333; }
            h1 { color: #1D3D47; font-size: 22px; margin-bottom: 20px; }
            h2 { 
              color: #3182ce; 
              font-size: 16px; 
              border-bottom: 1px solid #ccc; 
              padding-bottom: 5px; 
              margin-bottom: 15px;
            }
            .section { margin-bottom: 30px; }
            .field {
              display: flex;
              justify-content: space-between;
              gap: 15px;
              margin: 6px 0;
              font-size: 13px;
            }
          
            .label {
              font-weight: bold;
              width: 35%;
              margin-bottom: 10px;
            }
            .value {
              width: 75%;
              text-align: left;
              color: #555;
              word-break: break-word;
              margin-bottom: 10px;
            }
          
            .section {
              margin-bottom: 25px;
            }
            .page-break { 
              display: block;
              page-break-after: always; 
              break-after: page;
              height: 0; 
              margin: 0; 
              padding: 0;
              border: none; 
            }
          </style>
        </head>
        <body>
          <h1>Clinic Etoile Pre-Employment Medical Check-Up</h1>
  
          <div class="section">
            <h2>Employee Information</h2>
            <div class="field"><span class="label">Full Name: </span><span class="value">${firstName} ${middleName} ${lastName}</span></div>
            <div class="field"><span class="label">NRIC / Passport No.: </span><span class="value">${nric}</span></div>
            <div class="field"><span class="label">Date of Birth: </span><span class="value">${dateOfBirth}</span></div>
            <div class="field"><span class="label">Gender: </span><span class="value">${gender}</span></div>
            <div class="field"><span class="label">Contact Number: </span><span class="value">${contactNumber}</span></div>
            <div class="field"><span class="label">Company Name: </span><span class="value">${companyName}</span></div>
            <div class="field"><span class="label">Position: </span><span class="value">${position}</span></div>
            <div class="field"><span class="label">Department: </span><span class="value">${department}</span></div>
            <div class="field"><span class="label">Date of Examination: </span><span class="value">${dateOfExamination}</span></div>
          </div>
  
          <div class="section">
            <h2>Medical History</h2>
            <div class="field"><span class="label">Hypertension: </span><span class="value">${hypertension ? 'Yes' : 'No'}</span></div>
            <div class="field"><span class="label">Hypertension Remarks: </span><span class="value">${hypertensionRemarks}</span></div>
            <div class="field"><span class="label">Diabetes Mellitus: </span><span class="value">${diabetes ? 'Yes' : 'No'}</span></div>
            <div class="field"><span class="label">Diabetes Remarks: </span><span class="value">${diabetesRemarks}</span></div>
            <div class="field"><span class="label">Asthma: </span><span class="value">${asthma ? 'Yes' : 'No'}</span></div>
            <div class="field"><span class="label">Asthma Remarks: </span><span class="value">${asthmaRemarks}</span></div>
            <div class="field"><span class="label">Heart Disease: </span><span class="value">${heartDisease ? 'Yes' : 'No'}</span></div>
            <div class="field"><span class="label">Heart Disease Remarks: </span><span class="value">${heartDiseaseRemarks}</span></div>
            <div class="field"><span class="label">Tuberculosis: </span><span class="value">${tuberculosis ? 'Yes' : 'No'}</span></div>
            <div class="field"><span class="label">Tuberculosis Remarks: </span><span class="value">${tuberculosisRemarks}</span></div>
            <div class="field"><span class="label">Allergy: </span><span class="value">${allergy ? 'Yes' : 'No'}</span></div>
            <div class="field"><span class="label">Allergy Remarks: </span><span class="value">${allergyRemarks}</span></div>
            <div class="field"><span class="label">Previous Surgery: </span><span class="value">${previousSurgery ? 'Yes' : 'No'}</span></div>
            <div class="field"><span class="label">Previous Surgery Remarks: </span><span class="value">${previousSurgeryRemarks}</span></div>
            <div class="field"><span class="label">Current Medication: </span><span class="value">${currentMedication}</span></div>
            <div class="field"><span class="label">Smoking Status: </span><span class="value">${smokingStatus}</span></div>
            <div class="field"><span class="label">Alcohol Consumption: </span><span class="value">${alcoholConsumption}</span></div>
          </div>

          <div class="page-break"></div>
  
          <h1> </h1>
          <div class="section">
            <h2>Physical Examination</h2>
            <div class="field"><span class="label">Height (cm): </span><span class="value">${height}</span></div>
            <div class="field"><span class="label">Weight (kg): </span><span class="value">${weight}</span></div>
            <div class="field"><span class="label">BMI: </span><span class="value">${bmi}</span></div>
            <div class="field"><span class="label">Blood Pressure (mmHg): </span><span class="value">${bloodPressure}</span></div>
            <div class="field"><span class="label">Pulse Rate (bpm): </span><span class="value">${pulseRate}</span></div>
            <div class="field"><span class="label">Temperature (°C): </span><span class="value">${temperature}</span></div>
            <div class="field"><span class="label">Vision Assessment: </span><span class="value">${visionAssessment}</span></div>
            <div class="field"><span class="label">General Assessment: </span><span class="value">${generalAssessment}</span></div>
            <div class="field"><span class="label">Cardiovascular Assessment: </span><span class="value">${cardiovascularAssessment}</span></div>
            <div class="field"><span class="label">Respiratory Assessment: </span><span class="value">${respiratoryAssessment}</span></div>
          </div>
  
          <div class="section">
            <h2>Investigations</h2>
            <div class="field"><span class="label">Urine FEME: </span><span class="value">${urineFeme}</span></div>
            <div class="field"><span class="label">Blood Glucose: </span><span class="value">${bloodGlucose}</span></div>
            <div class="field"><span class="label">Full Blood Count (FBC): </span><span class="value">${fbc}</span></div>
            <div class="field"><span class="label">Lipid Profile: </span><span class="value">${lipidProfile}</span></div>
            <div class="field"><span class="label">Hepatitis Screening: </span><span class="value">${hepatitis}</span></div>
            <div class="field"><span class="label">HIV Screening: </span><span class="value">${hiv}</span></div>
            <div class="field"><span class="label">Tumour Marker: </span><span class="value">${tumourMarker}</span></div>
            <div class="field"><span class="label">Chest X-Ray: </span><span class="value">${chestXRay}</span></div>
            <div class="field"><span class="label">ECG: </span><span class="value">${ecg}</span></div>
          </div>

  
          <div class="section">
            <h2>Fitness of Employment Assessment</h2>
            <div class="field"><span class="label">Fitness for Employment Status: </span><span class="value">${employmentStatus}</span></div>
            <div class="field"><span class="label">Doctor's Remarks: </span><span class="value">${doctorRemarks}</span></div>
            <div class="field"><span class="label">Doctor Name: </span><span class="value">${doctorName}</span></div>
            <div class="field"><span class="label">Doctor MMC No.: </span><span class="value">${doctorMmc}</span></div>
          </div>
        </body>
      </html>
    `;

    try {

      if (Platform.OS === 'web') {
        const routeName = `Medical-Report-${firstName}-${lastName}`;
        sessionStorage.setItem(routeName, html);
        window.open(`/${routeName}`, '_blank');
        return;
      }

      // Android/iOS only
      const result =
        await Print.printToFileAsync({
          html
        });

      if (!result?.uri) {
        throw new Error(
          "PDF generation failed"
        );
      }

    }
    catch (error) {

      const message =
        error instanceof Error
          ? error.message
          : "Unknown error";

      alert(message);

    }
  };

  return (

    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      {/* Title */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Clinic Etoile Pre-Employment Medical Check-Up!</ThemedText>
        <Scope />
      </ThemedView>

      {/* Subtitle - Employee Information */}
      <ThemedView style={styles.subtitleContainer}>
        <ThemedText type="subtitle">Employee Information</ThemedText>
      </ThemedView>

      {/* Full Name */}
      <ThemedView style={styles.stepContainer}>

        <ThemedText type="defaultSemiBold">
          Full Name <span className="form-required" aria-hidden="true" style={{ color: 'red' }}>*</span>
        </ThemedText>

        <ThemedView>
          {/* First Name */}
          <TextInput
            style={styles.textboxContainer}
            autoComplete='given-name'
            placeholder='First Name'
            placeholderTextColor='#999'
            onChangeText={setFirstName}
          />
        </ThemedView>

        {/* Middle Name */}
        <ThemedView>
          <TextInput
            style={styles.textboxContainer}
            autoComplete='given-name'
            placeholder='MiddleName'
            placeholderTextColor='#999'
            onChangeText={setMiddleName}
          />
        </ThemedView>

        {/* Last Name */}
        <ThemedView>
          <TextInput
            style={styles.textboxContainer}
            autoComplete='given-name'
            placeholder='LastName'
            placeholderTextColor='#999'
            onChangeText={setLastName}
          />
        </ThemedView>

      </ThemedView>

      {/* IC / Passport */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">
          NRIC / Passport No.<span className="form-required" aria-hidden="true" style={{ color: 'red' }}>*</span>
        </ThemedText>

        <ThemedView>
          {/* IC / Passport Input*/}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setNric}
          />
        </ThemedView>

      </ThemedView>

      {/* Date of Birth */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">
          Date of Birth <span className="form-required" aria-hidden="true" style={{ color: 'red' }}>*</span>
        </ThemedText>
        {/* Date of Birth Selection */}
        <DatePicker onChange={setDateOfBirth} />
      </ThemedView>

      {/* Gender */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">
          Gender <span className="form-required" aria-hidden="true" style={{ color: 'red' }}>*</span>
        </ThemedText>
        <ThemedView>
          {/* Gender Selection */}
          <GenderPicker onChange={setGender} />
        </ThemedView>
      </ThemedView>

      {/* Contact Number */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">
          Contact Number <span className="form-required" aria-hidden="true" style={{ color: 'red' }}>*</span>
        </ThemedText>
        <ThemedView>
          {/* Contact Number Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setContactNumber}
          />
        </ThemedView>
      </ThemedView>

      {/* Company */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">
          Company Name <span className="form-required" aria-hidden="true" style={{ color: 'red' }}>*</span>
        </ThemedText>
        <ThemedView>
          {/* Company Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setCompanyName}
          />
        </ThemedView>
      </ThemedView>

      {/* Position */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">
          Position <span className="form-required" aria-hidden="true" style={{ color: 'red' }}>*</span>
        </ThemedText>
        <ThemedView>
          {/* Position Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setPosition}
          />
        </ThemedView>
      </ThemedView>

      {/* Department */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Department</ThemedText>
        <ThemedView>
          {/* Department Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setDepartment}
          />
        </ThemedView>
      </ThemedView>

      {/* Date of Examination */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">
          Date of Examination <span className="form-required" aria-hidden="true" style={{ color: 'red' }}>*</span>
        </ThemedText>
        <ThemedView>
          {/* Date of Examination Selection */}
          <DatePicker onChange={setDateOfExamination} />
        </ThemedView>
      </ThemedView>

      {/* Subtitle - Medical History */}
      <ThemedView style={styles.subtitleContainer}>
        <ThemedText type="subtitle">Medical History</ThemedText>
      </ThemedView>

      {/* Hypertension */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Hypertension</ThemedText>
        <ThemedView>
          {/* Hypertension Input */}
          <YesCheckbox onChange={setHypertension} />
        </ThemedView>
      </ThemedView>

      {/* Hypertension - Remarks */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Hypertension - Remarks</ThemedText>
        <ThemedView>
          {/* Hyertension - Remarks Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setHypertensionRemarks}
          />
        </ThemedView>
      </ThemedView>

      {/* Diabetes Mellitus */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Diabetes Mellitus</ThemedText>
        <ThemedView>
          {/* Diabetes Mellitus Input */}
          <YesCheckbox onChange={setDiabetes} />
        </ThemedView>
      </ThemedView>

      {/* Diabetes Mellitus - Remarks */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Diabetes Mellitus - Remarks</ThemedText>
        <ThemedView>
          {/* Diabetes Mellitus - Remarks Input*/}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setDiabetesRemarks}
          />
        </ThemedView>
      </ThemedView>

      {/* Asthma */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Asthma</ThemedText>
        <ThemedView>
          {/* Asthma Input */}
          <YesCheckbox onChange={setAsthma} />
        </ThemedView>
      </ThemedView>

      {/* Asthma - Remarks */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Asthma- Remarks</ThemedText>
        <ThemedView>
          {/* Asthma - Remarks */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setAsthmaRemarks}
          />
        </ThemedView>
      </ThemedView>

      {/* Heart Disease*/}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Heart Disease</ThemedText>
        <ThemedView>
          {/* Heart Disease Input */}
          <YesCheckbox onChange={setHeartDisease} />
        </ThemedView>
      </ThemedView>

      {/* Heart Disease - Remarks */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Heart Disease - Remarks</ThemedText>
        <ThemedView>
          {/* Heart Disease - Remarks */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setHeartDiseaseRemarks}
          />
        </ThemedView>
      </ThemedView>

      {/* Tuberculosis */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Tuberculosis</ThemedText>
        <ThemedView>
          {/* Tuberculosis Input */}
          <YesCheckbox onChange={setTuberculosis} />
        </ThemedView>
      </ThemedView>

      {/* Tuberculosis - Remarks */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Tuberculosis - Remarks</ThemedText>
        <ThemedView>
          {/* Tuberculosis - Remarks Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setTuberculosisRemarks}
          />
        </ThemedView>
      </ThemedView>

      {/* Allergy */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Allergy</ThemedText>
        <ThemedView>
          {/* Allergy input */}
          <YesCheckbox onChange={setAllergy} />
        </ThemedView>
      </ThemedView>

      {/* Allergy - Remarks */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Allergy - Remarks</ThemedText>
        <ThemedView>
          {/* Allergy - Remarks Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setAllergyRemarks}
          />
        </ThemedView>
      </ThemedView>

      {/* Previous Surgery */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Previous Surgery</ThemedText>
        <ThemedView>
          {/* Previous Surgery Input */}
          <YesCheckbox onChange={setPreviousSurgery} />
        </ThemedView>
      </ThemedView>

      {/* Previous Surgery - Remarks */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Previous Surgery - Remarks</ThemedText>
        <ThemedView>
          {/* Previous Surgery - Remarks Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setPreviousSurgeryRemarks}
          />
        </ThemedView>
      </ThemedView>

      {/* Current Medication */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Current Medication</ThemedText>
        <ThemedView>
          {/* Current Medication Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setCurrentMedication}
          />
        </ThemedView>
      </ThemedView>

      {/* Smoking Status */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Smoking Status</ThemedText>
        <ThemedView>
          {/* Smoking Status Selection */}
          <SmokingStatusPicker onChange={setSmokingStatus} />
        </ThemedView>
      </ThemedView>

      {/* Alcohol Consumption */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Alcohol Consumption</ThemedText>
        <ThemedView>
          {/* Alcohol Consumption Selection */}
          <AlcoholConsumptionPicker onChange={setAlcoholConsumption} />
        </ThemedView>
      </ThemedView>

      {/* Physical Examination */}
      <ThemedView style={styles.subtitleContainer}>
        <ThemedText type="subtitle">Physical Examination</ThemedText>
      </ThemedView>

      {/* Height */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Height (cm) <span className="form-required" aria-hidden="true" style={{ color: 'red' }}>*</span></ThemedText>
        <ThemedView>
          {/* Height Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder='e.g., 23'
            placeholderTextColor='#999'
            onChangeText={setHeight}
          />
        </ThemedView>
      </ThemedView>

      {/* Weight */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Weight (kg) <span className="form-required" aria-hidden="true" style={{ color: 'red' }}>*</span></ThemedText>
        <ThemedView>
          {/* Weight */}
          <TextInput
            style={styles.textboxContainer}
            placeholder='e.g., 23'
            placeholderTextColor='#999'
            onChangeText={setWeight}
          />
        </ThemedView>
      </ThemedView>

      {/* BMI */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">BMI</ThemedText>
        <ThemedView>
          {/* BMI */}
          <TextInput
            style={styles.textboxContainer}
            placeholder='e.g.,23'
            placeholderTextColor='#999'
            onChangeText={setBmi}
          />
        </ThemedView>
      </ThemedView>

      {/* Blood Pressure */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Blood Pressure (mmHg) <span className="form-required" aria-hidden="true" style={{ color: 'red' }}>*</span></ThemedText>
        <ThemedView>
          {/* Blood Pressure Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setBloodPressure}
          />
        </ThemedView>
      </ThemedView>

      {/* Pulse Rate */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Pulse Rate (bpm) <span className="form-required" aria-hidden="true" style={{ color: 'red' }}>*</span></ThemedText>
        <ThemedView>
          {/* Pulse Rate Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder='e.g.,23'
            placeholderTextColor='#999'
            onChangeText={setPulseRate}
          />
        </ThemedView>
      </ThemedView>

      {/* Temperature */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Temperature (°C) <span className="form-required" aria-hidden="true" style={{ color: 'red' }}>*</span></ThemedText>
        <ThemedView>
          {/* IC / Passport */}
          <TextInput
            style={styles.textboxContainer}
            placeholder='e.g., 23°C'
            placeholderTextColor='#999'
            onChangeText={setTemperature}
          />
        </ThemedView>
      </ThemedView>

      {/* Vision Assessment */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Vision Assessment</ThemedText>
        <ThemedView>
          {/* Vision Assessment Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setVisionAssessment}
          />
        </ThemedView>
      </ThemedView>

      {/* General Asssessment */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">General Assessment</ThemedText>
        <ThemedView>
          {/* General Assessment Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setGeneralAssessment}
          />
        </ThemedView>
      </ThemedView>

      {/* Cardiovascular Assessment */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Cardiovasular Assessment</ThemedText>
        <ThemedView>
          {/* Cardiovascular Assessment Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setCardiovascularAssessment}
          />
        </ThemedView>
      </ThemedView>

      {/* Respiratory Assessment */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Respiratory Assessment</ThemedText>
        <ThemedView>
          {/* Respiratory Asssessment Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setRespiratoryAssessment}
          />
        </ThemedView>
      </ThemedView>

      {/* Urine FEME */}
      <ThemedView style={styles.subtitleContainer}>
        <ThemedText type="subtitle">Investigations</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Urine FEME</ThemedText>
        <ThemedView>
          {/* Urine FEME Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setUrineFeme}
          />
        </ThemedView>
      </ThemedView>

      {/* Blood Glucose */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Blood Glucose</ThemedText>
        <ThemedView>
          {/* Blood Glucose Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setBloodGlucose}
          />
        </ThemedView>
      </ThemedView>

      {/* Full Blood Count (FBC) */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Full Blood Count (FBC)</ThemedText>
        <ThemedView>
          {/* Full Blood Count (FBC) Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setFbc}
          />
        </ThemedView>
      </ThemedView>

      {/* Lipid Profile */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Lipid Profile</ThemedText>
        <ThemedView>
          {/* Lipid Profile Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setLipidProfile}
          />
        </ThemedView>
      </ThemedView>

      {/* Hepatitis Screening */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Hepatitis Screening</ThemedText>
        <ThemedView>
          {/* Hepatitis Screening Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setHepatitis}
          />
        </ThemedView>
      </ThemedView>

      {/* HIV Screening */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">HIV Screening</ThemedText>
        <ThemedView>
          {/* HIV Screening Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setHiv}
          />
        </ThemedView>
      </ThemedView>

      {/* Tumour Marker */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Tumour Marker</ThemedText>
        <ThemedView>
          {/* Tumour Marker Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setTumourMarker}
          />
        </ThemedView>
      </ThemedView>

      {/* Chest X-Ray */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Chest X-Ray</ThemedText>
        <ThemedView>
          {/* Chest X-Ray Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setChestXRay}
          />
        </ThemedView>
      </ThemedView>

      {/* ECG */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">ECG</ThemedText>
        <ThemedView>
          {/* ECG Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setEcg}
          />
        </ThemedView>
      </ThemedView>

      {/* Fitness for Employment Assessment */}
      <ThemedView style={styles.subtitleContainer}>
        <ThemedText type="subtitle">Fitness of Employment Assessment</ThemedText>
      </ThemedView>

      {/* Fitness for Employment Status */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Fitness for Employment Status <span className="form-required" aria-hidden="true" style={{ color: 'red' }}>*</span></ThemedText>
        <ThemedView>
          {/* Fitness for Employment Status Input */}
          <EmploymentStatusPicker onChange={setEmploymentStatus} />
        </ThemedView>
      </ThemedView>

      {/* Doctor's Remarks */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Doctor's Remarks</ThemedText>
        <ThemedView>
          {/* Doctor's Remarks Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setDoctorRemarks}
          />
        </ThemedView>
      </ThemedView>

      {/* Doctor Name */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Doctor Name <span className="form-required" aria-hidden="true" style={{ color: 'red' }}>*</span></ThemedText>
        <ThemedView>
          {/* Doctor Name Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setDoctorName}
          />
        </ThemedView>
      </ThemedView>

      {/* Doctor MMC No. */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Doctor MMC No. <span className="form-required" aria-hidden="true" style={{ color: 'red' }}>*</span></ThemedText>
        <ThemedView>
          {/* Doctor MMC.No Input */}
          <TextInput
            style={styles.textboxContainer}
            placeholder=''
            placeholderTextColor='#999'
            onChangeText={setDoctorMmc}
          />
        </ThemedView>
      </ThemedView>

      {/* Clinic Stamp */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Clinic Stamp</ThemedText>
        <ThemedView>
          {/* Clinic Stamp Input */}
          <ClinicStamp />
        </ThemedView>
      </ThemedView>

      {/* Submit */}
      <ThemedView style={styles.submitFamilyContainer}>
        <TouchableOpacity style={styles.submitContainer} onPress={handleSubmit}>
          <ThemedText type="subtitle">Submit</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="defaultSemiBold">Step 2: Explore</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  subtitleContainer: {
    borderRadius: '4px',
    backgroundColor: '#E7F0F8',
    backgroundPosition: 'center top',
    paddingBlock: 10,
    marginTop: 1.25,
    marginBottom: 0.4,
  },
  stepContainer: {
    flexDirection: "column",
    paddingLeft: 25,
  },
  textboxContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 2,
    paddingVertical: 10,
    paddingLeft: 15,
    marginVertical: 10,
    width: '60%',
    outlineWidth: 0,
  },
  submitFamilyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',  // 👈 centers the button horizontally
  },
  submitContainer: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#E7F0F8',
    backgroundColor: '#E7F0F8',
    paddingVertical: 10,
    paddingLeft: 15,
    width: '20%',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
