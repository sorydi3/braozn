import React from "react";
import PropTypes from "prop-types";
import { auth } from "@/config/firebase";
import { Container } from "postcss";

//cancel icon
import { FaTimes, FaCheck, FaEdit } from "react-icons/fa";
import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Flex,
  Heading,
  InputGroup,
  HStack,
  Input,
  InputLeftElement,
  InputRightElement,
  TagLeftIcon,
  useColorMode,
  useColorModeValue,
  Text,
  Textarea,
  Select,
  Checkbox,
  Tag,
  TagLabel,
  FormLabel,
  FormControl,
  FormHelperText,
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  useEditableProps,
  useEditable,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tooltip,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardText,
  Divider,
} from "@chakra-ui/react";

const benefits = [
  "Health Insurance",
  "Paid Time Off",
  "401K",
  "Stock Options",
  "Flexible Hours",
  "Remote Work",
  "Dental Insurance",
  "Vision Insurance",
  "Life Insurance",
  "Disability Insurance",
  "Maternity/Paternity Leave",
  "Employee Discount",
  "Employee Assistance Program",
  "Gym Membership",
  "Pet Insurance",
  "Tuition Reimbursement",
  "Child Care",
  "Commuter Benefits",
  "Employee Referral Program",
  "Employee Stock Purchase Plan",
  "Flexible Spending Account",
  "Professional Development",
  "Wellness Program",
  "Other",
];

const jobtypes = [
  "Full Time",
  "Part Time",
  "Contract",
  "Internship",
  "Temporary",
  "Commission",
  "Volunteer",
  "Other",
];

const jobcategories = [
  "Accounting",
  "Administrative",
  "Advertising",
  "Agriculture",
  "Architecture",
  "Arts",
  "Automotive",
  "Banking",
  "Biotech",
  "Business Development",
  "Business Operations",
  "Business Strategy",
  "Business Support",
  "Clerical",
  "Communications",
  "Construction",
  "Consulting",
  "Customer Service",
  "Design",
  "Distribution",
  "Education",
  "Engineering",
  "Entry Level",
  "Environmental",
  "Executive",
  "Facilities",
  "Finance",
  "Food & Beverage",
  "Government",
  "Healthcare",
  "Hospitality",
  "Human Resources",
  "Information Technology",
  "Installation",
  "Insurance",
  "Legal",
  "Management",
  "Manufacturing",
  "Marketing",
  "Media",
  "Nonprofit",
  "Other",
  "Pharmaceutical",
  "Product",
  "Project Management",
  "Public Relations",
  "Purchasing",
  "Quality Assurance",
  "Real Estate",
  "Research",
  "Retail",
  "Sales",
  "Science",
  "other",
];

const joblevels = [
  "Entry Level",
  "Mid Level",
  "Senior Level",
  "Director",
  "Executive",
  "Internship",
  "Other",
];

const joblocations = ["Remote", "Onsite", "hibrid", "Other"];

const jobexperiences = [
  "1-2 Years",
  "2-5 Years",
  "5-10 Years",
  "10+ Years",
  "Other",
];

const jobeducation = [
  "High School",
  "Associate",
  "Bachelor",
  "Master",
  "Doctorate",
  "Other",
];

const joblanguages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Chinese",
  "Japanese",
  "Korean",
];

const jobskills = [
  "Accounting",
  "Administrative",
  "Advertising",
  "Agriculture",
  "Architecture",
  "Arts",
  "Automotive",
  "Banking",
  "Biotech",
  "Business Development",
  "Business Operations",
  "Business Strategy",
  "Business Support",
  "Clerical",
  "Communications",
  "Construction",
  "Consulting",
  "Customer Service",
  "Design",
  "Distribution",
  "Education",
  "Engineering",
  "Entry Level",
  "Environmental",
  "Executive",
  "Facilities",
];

//arrar of emojis for each benefit
const benefitemojis = [
  "🏥",
  "🕑",
  "🔑",
  "📈",
  "⏰",
  "🏠",
  "🦷",
  "👓",
  "💀",
  "🦿",
  "👶",
  "🛍️",
  "🆘",
  "🏋️",
  "🐶",
  "🎓",
  "👶",
  "🚆",
  "👨‍👩‍👧‍👦",
  "📈",
  "🏋️",
  "🧘‍♀️",
  "🔧",
];

const jobtypeemojis = ["🏢", "🕑", "📄", "👨‍🎓", "🕑", "💰", "👨‍👩‍👧‍👦", "🔧"];
const joblocationemojis = ["🏠", "🏢", "🏠🏢", "🔧"];
const jobexperienceemojis = ["👨‍🎓", "👨‍🎓", "👨‍🎓", "👨‍🎓", "🔧"];
const jobeducationemojis = ["🏫", "🏫", "🏫", "🏫", "🏫", "🔧"];
const joblanguageemojis = ["🇺🇸", "🇪🇸", "🇫🇷", "🇩🇪", "🇮🇹", "🇨🇳", "🇯🇵", "🇰🇷"];

function Benefits() {
  return (
    <WraperJobDetails headinTiltle={"Benefits"}>
      <Box display={"flex"} className="flex-wrap gap-3 justify-center">
        {benefits.map((benefit, index) => (
          <Tag key={index} size="lg" variant="subtle" borderRadius="full">
            <Checkbox key={index} value={benefit} iconSize="0px">
              {benefitemojis[index]}
              {benefit}
            </Checkbox>
          </Tag>
        ))}
      </Box>
    </WraperJobDetails>
  );
}

function JobExperience() {
  return (
    <WraperJobDetails headinTiltle={"Job Experience"}>
      <Box display={"flex"} className="flex-wrap gap-3 justify-center">
        {jobexperiences.map((jobexperience, index) => (
          <Tag key={index} size="lg" variant="subtle" borderRadius="full">
            <Checkbox key={index} value={jobexperience} iconSize="0px">
              {jobexperience}
            </Checkbox>
          </Tag>
        ))}
      </Box>
    </WraperJobDetails>
  );
}

function WraperJobDetails({ children, headinTiltle }) {
  return (
    <Card
      p={4}
      shadow={"md"}
      borderWidth="1px"
      borderRadius={"lg"}
      className="w-full"
    >
      <CardHeader fontSize={"xl"} fontWeight={"bold"} mb={4}>
        {headinTiltle}
      </CardHeader>
      <Divider></Divider>
      <CardBody>{children}</CardBody>
    </Card>
  );
}

function JobLevel() {
  return (
    <WraperJobDetails headinTiltle="Job Level">
      <Box display={"flex"} className="flex-wrap gap-3 justify-center">
        {joblevels.map((joblevel, index) => (
          <Tag key={index} size="lg" variant="subtle" borderRadius="full">
            <Checkbox key={index} value={joblevel} iconSize="0px">
              {joblevel}
            </Checkbox>
          </Tag>
        ))}
      </Box>
    </WraperJobDetails>
  );
}

function JobLocation() {
  return (
    <WraperJobDetails headinTiltle="Job Location">
      <Box display={"flex"} className="flex-wrap gap-3 justify-center">
        {joblocations.map((joblocation, index) => (
          <Tag key={index} size="lg" variant="subtle" borderRadius="full">
            <Checkbox key={index} value={joblocation} iconSize="0px">
              {joblocationemojis[index]}
              {joblocation}
            </Checkbox>
          </Tag>
        ))}
      </Box>
    </WraperJobDetails>
  );
}

function JobTypes() {
  return (
    <WraperJobDetails headinTiltle="Job Types">
      <Box display={"flex"} className="flex-wrap gap-3 justify-center">
        {jobtypes.map((jobtype, index) => (
          <Tag key={index} size="lg" variant="subtle" borderRadius="full">
            <Checkbox key={index} value={jobtype} iconSize="0px">
              {jobtype}
            </Checkbox>
          </Tag>
        ))}
      </Box>
    </WraperJobDetails>
  );
}

function EditableControls(props) {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();
  return isEditing ? (
    <HStack spacing="2">
      <Button
        size="sm"
        {...getSubmitButtonProps()}
        leftIcon={<FaCheck />}
      ></Button>
      <Button
        size="sm"
        {...getCancelButtonProps()}
        leftIcon={<FaTimes />}
      ></Button>
    </HStack>
  ) : (
    <Button
      size="sm"
      {...getEditButtonProps()}
      _hover={{
        background: useColorModeValue("gray.100", "gray.700"),
      }}
      leftIcon={<FaEdit />}
    ></Button>
  );
}
function JobDescriptionEditable({ description }) {
  return (
    <>
      <Heading fontSize={"xl"} fontWeight={"bold"} textAlign={"center"}>
        Job Description
      </Heading>
      <Editable
        defaultValue="JOB DESCRIPTION HERE⚡️"
        isPreviewFocusable={true}
        selectAllOnFocus={false}
        submitOnBlur={false}
      >
        <Tooltip label="Click to edit">
          <EditablePreview
            py={2}
            px={4}
            _hover={{
              background: useColorModeValue("gray.100", "gray.700"),
            }}
          />
        </Tooltip>
        <Input py={2} px={4} as={EditableInput} />
        <EditableControls />
      </Editable>
    </>
  );
}

function JobCategories() {
  return (
    <WraperJobDetails headinTiltle="Job Categories">
      <Select
        placeholder="Select Job Category"
        size="lg"

        variant="flushed"
        isMulti
      >
        {jobcategories.map((jobcategory, index) => (
          <option
            key={index}
            value={jobcategory}
            className="text-lg font-medium text-gray-900 ml-5"
          >
            <Box
              display={"flex"}
              className="flex-wrap gap-3 justify-center bg-gray-100 rounded-full px-3 py-1"
            >
              <Text className="text-lg font-medium text-gray-900 ml-5">
                {jobcategory}
              </Text>
            </Box>
          </option>
        ))}
      </Select>
    </WraperJobDetails>
  );
}

function JobSalary() {
  return (
    <WraperJobDetails headinTiltle="Job Salary">
      <Input
        placeholder="Salary"
        size="lg"
        variant="flushed"
        isRequired
        type="number"
      ></Input>
    </WraperJobDetails>
  );
}

function JobInputItem({
  name,
  label,
  type,
  placeholder,
  icon,
  error = null,
  variant,
  isRequired,
  ...other
}) {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      <Input
        name={name}
        isRequired={true}
        label={label}
        type={type}
        placeholder={placeholder}
        variant={variant}
        {...other}
      ></Input>
    </FormControl>
  );
}

function JobBost(props) {
  const formBorder = useColorModeValue("gray.300", "gray.600");
  const formColor = useColorModeValue("gray.700", "gray.200");
  const formShadow = useColorModeValue("md", "dark-lg");
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      className="w-full m-3 rounded-lg shadow-lg p-10"
      border={1}
      borderColor={formBorder}
      color={formColor}
      shadow={formShadow}
    >
      <Heading className="mb-5 mx-auto mt-10">Post a job</Heading>
      <Box
        display={"flex"}
        flexDirection={"column"}
        className="w-full m-3 rounded-lg shadow-lg p-10"
        border={1}
        borderColor={formBorder}
        color={formColor}
        shadow={formShadow}
        gap={4}
      >
        <JobInputItem
          name="title"
          label="Title"
          placeholder="Title"
          isRequired={true}
        />
        <JobInputItem
          name="company"
          label="Company"
          placeholder="Company"
          isRequired={true}
        />
        <JobInputItem name="contact" label="Contact" placeholder="Contact" />
        <JobInputItem name="email" label="Email" placeholder="Email" />
        <JobLocation />
        <JobLevel />
        <JobExperience />
        <JobSalary />
        <JobTypes />
        <JobCategories />
        <Benefits />
        <JobDescriptionEditable description="Job Description" />
        {postJobButton()}
      </Box>
    </Box>
  );
}

function postJobButton() {
  return (
    <motion.Button
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.9 }}
    >
    <Button
      className="mt-10"
      colorScheme="teal"
      type="submit"
      size="lg"
      variant="solid"
      width={"full"}
    >
      Post Job
    </Button>
    </motion.Button>
  );
}

JobBost.propTypes = {};

export default JobBost;
