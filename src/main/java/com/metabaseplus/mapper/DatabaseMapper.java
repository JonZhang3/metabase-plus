package com.metabaseplus.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.metabaseplus.entity.Database;

public interface DatabaseMapper extends BaseMapper<Database> {

    Integer getByNameAndEnv(String name, String env);

    void updateEnvironment(Integer id, String env);

}
