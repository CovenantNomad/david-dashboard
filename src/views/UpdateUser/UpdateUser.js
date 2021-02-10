import React from 'react';
import { db } from '../../config/firebaseConfig'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from '@material-ui/core/MenuItem';
// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/CustomButtons/Button";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomSelect from '../../components/CustomSelect/CustomSelect'



const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

const RegisterUser = () => {
  const classes = useStyles();
  const [ sex, setSex ] = React.useState('');
  const [ grade, setGrade ] = React.useState('');
  const [ inputs , setInputs ] = React.useState({
    name: "",
    evangelizer: "",
    phoneNumber: "",
    birthday: "",
    address: "",
    introduce: "",
  });
  
  const onInputChange = (e) => {
    const {name, value } = e.target
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  const onSubmit = () => {
    alert('아직 업데이트 기능은 완성되지 않았습니다.')
  }
  

  return (
    <div>
      <GridContainer >
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>학생등록</h4>
              {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput 
                    labelText="이름" 
                    id="name" 
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: onInputChange,
                      name: "name",
                      value: inputs.name
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="인도자"
                    id="evangelizer"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: onInputChange,
                      name: "evangelizer",
                      value: inputs.evangelizer
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="전화번호"
                    id="phoneNumber"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: '010-1234-5678',
                      onChange: onInputChange,
                      name: "phoneNumber",
                      value: inputs.phonenumber
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="생년월일 "
                    id="birthday"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      placeholder: '2000-01-01',
                      onChange: onInputChange,
                      name: "birthday",
                      value: inputs.birthday
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="주소"
                    id="address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: onInputChange,
                      name: "address",
                      value: inputs.address
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomSelect
                    labelText="성별"
                    id="sex"
                    formControlProps={{
                      fullWidth: true
                    }}
                    selectProps={{
                      value: sex,
                      onChange: handleSexChange
                    }}
                  >
                    <MenuItem value={'male'}>남성</MenuItem>
                    <MenuItem value={'female'}>여성</MenuItem>
                  </CustomSelect>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                <CustomSelect
                    labelText="학년"
                    id="grade"
                    formControlProps={{
                      fullWidth: true
                    }}
                    selectProps={{
                      value: grade,
                      onChange: handleGradeChange
                    }}
                  >
                    <MenuItem value={'M1'}>중학교 1학년</MenuItem>
                    <MenuItem value={'M2'}>중학교 2학년</MenuItem>
                    <MenuItem value={'M3'}>중학교 3학년</MenuItem>
                    <MenuItem value={'H1'}>고등학교 1학년</MenuItem>
                    <MenuItem value={'H2'}>고등학교 2학년</MenuItem>
                    <MenuItem value={'H3'}>고등학교 3학년</MenuItem>
                  </CustomSelect>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA", marginTop:20}}>간단한 소개</InputLabel>
                  <CustomInput
                    labelText="특이사항이나 알아야 할 내용을 적어주세요"
                    id="aboutMe"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      onChange: onInputChange,
                      name: "introduce",
                      value: inputs.introduce
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button onClick={()=>onSubmit()} color="primary">업데이트 하기</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default RegisterUser;