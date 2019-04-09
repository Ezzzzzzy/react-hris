import React, { Component } from "react";
import {
	Button,
	Col,
	DatePicker,
	Divider,
	Form,
	Row,
	Select,
	Input
} from "antd";

const TextArea = Input.TextArea
const FormItem = Form.Item;
const Option = Select.Option;

class DisciplinaryForm extends Component {
	render() {
		const { form, onSave, bwh_id } = this.props
		const okHandle = () => {
			form.validateFields((err, fieldsValue) => {
				if (err) return;
				// form.resetFields();
				onSave(fieldsValue);
			});
		};

		// form.getFieldDecorator("branch_work_histories_id", { initialValue: bwh_id })

		return (
			<Form layout="vertical">
				<Row gutter={16}>
					<Col xl={12} xs={12}>
						<FormItem label="Date of Incident">
							{
								form.getFieldDecorator("date_of_incident", {
									rules: [{
										required: true,
										message: "Date of incident is required"
									}]
								})(<DatePicker style={{ width: "100%" }} />)
							}

						</FormItem>
						<FormItem label="Incident Report">
							{
								form.getFieldDecorator("incident_report", {
									rules: [{
										required: false,
									}]
								})(<TextArea
									autosize={{ minRows: 5.5 }}
								/>)
							}

						</FormItem>
						<FormItem label="Date of Decision">
							{
								form.getFieldDecorator("date_of_decision", {
									rules: [{
										required: true,
										message: "Date of decision is required"
									}]
								})(<DatePicker style={{ width: "100%" }} />)
							}
						</FormItem>
					</Col>
					<Col xl={12} xs={12}>
						<FormItem label="Date of Issuance of Notice to Explain">
							{
								form.getFieldDecorator("date_of_notice_to_explain", {
									rules: [{
										required: true,
										message: "Date of notice to explain is required"
									}]
								})(<DatePicker style={{ width: "100%" }} />)
							}
						</FormItem>
						<FormItem label="Date of Explanation">
							{
								form.getFieldDecorator("date_of_explanation", {
									rules: [{
										required: true,
										message: "Date of Explanation is required"
									}]
								})(<DatePicker style={{ width: "100%" }} />)
							}
						</FormItem>
						<FormItem label="Status">
							{
								form.getFieldDecorator("status", {
									rules: [{
										required: true,
										message: "Status is required"
									}]
								})(
									<Select>
										<Option value={0}>On Going</Option>
										<Option value={1}>Resolved</Option>
									</Select>
								)
							}
						</FormItem>
						<FormItem label="Decision">
							{
								form.getFieldDecorator("decision", {
									rules: [{
										required: false,
									}]
								})(<Input placeholder="Decision" />)
							}
						</FormItem>
					</Col>
					<Divider />
					<Button
						type="primary"
						block
						onClick={okHandle}
					>
						Save
					</Button>
				</Row>
			</Form>
		)
	}
}

export default Form.create()(DisciplinaryForm);