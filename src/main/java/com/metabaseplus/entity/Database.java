package com.metabaseplus.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.Date;

@Data
@TableName("metabase_database")
public class Database {

    @TableId(type = IdType.AUTO)
    private Integer id;
    private Date created_at;
    private Date updated_at;
    private String name;
    private String description;
    private String details;
    private String engine;
    private Byte is_sample;
    private Byte is_full_sync;
    private String points_of_interest;
    private String caveats;
    private String metadata_sync_schedule;
    private String cache_field_values_schedule;
    private String timezone;
    private Byte is_on_demand;
    private String options;
    private Byte auto_run_queries;
    private Byte refingerprint;
    private String env;

}
