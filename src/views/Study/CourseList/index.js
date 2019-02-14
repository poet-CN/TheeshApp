/*
* author: mamingyang@baofeng.com
* date: 2019/2/14
*/

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import { Header } from '../../../components/HeaderBar';
import { Color } from '../../../utils/constants';

const { bgGray: backgroundColor } = Color;

@inject(({ CourseListStore }) => ({ CourseListStore }))
@observer
class CourseList extends Component {
    componentDidMount() {
        const { CourseListStore: { initCourseList }, navigation: { state: { params: { id } } } } = this.props;
        initCourseList(id);
    }

    render() {
        const { navigation: { state: { params: { title } } } } = this.props;
        return (
            <Container>
                <Content style={{ backgroundColor }}>
                    <Header title={title} />
                </Content>
            </Container>
        );
    }
}

export default CourseList;
