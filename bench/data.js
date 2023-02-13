window.BENCHMARK_DATA = {
  "lastUpdate": 1676300197681,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "8610b9f1ad9dfe528d97cafc384175dac463039d",
          "message": "test(backends): strict validate exceptions in test_numeric",
          "timestamp": "2023-02-13T09:47:26-05:00",
          "tree_id": "131d735f3ab3ca5e7806178fdcd0bbc1cd5c2f27",
          "url": "https://github.com/ibis-project/ibis/commit/8610b9f1ad9dfe528d97cafc384175dac463039d"
        },
        "date": 1676300106475,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 119.06810678281172,
            "unit": "iter/sec",
            "range": "stddev: 0.0007231867616386649",
            "extra": "mean: 8.398554634147896 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 86.285003571762,
            "unit": "iter/sec",
            "range": "stddev: 0.00018081830097071993",
            "extra": "mean: 11.58949943333217 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8756993727991997,
            "unit": "iter/sec",
            "range": "stddev: 0.005325665471350048",
            "extra": "mean: 533.1344748000049 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 73.7146455784847,
            "unit": "iter/sec",
            "range": "stddev: 0.016583419314894998",
            "extra": "mean: 13.565825246155327 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 28.151663746266525,
            "unit": "iter/sec",
            "range": "stddev: 0.0032028476495047217",
            "extra": "mean: 35.521879240001226 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6724640943011818,
            "unit": "iter/sec",
            "range": "stddev: 0.012928511812788545",
            "extra": "mean: 1.4870682441999974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 133.4627639202783,
            "unit": "iter/sec",
            "range": "stddev: 0.0008206743751296389",
            "extra": "mean: 7.4927265899972895 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6341108370532382,
            "unit": "iter/sec",
            "range": "stddev: 0.004067041451633356",
            "extra": "mean: 1.577011370200006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4327.563967238783,
            "unit": "iter/sec",
            "range": "stddev: 0.00006350752058791716",
            "extra": "mean: 231.07688472553147 usec\nrounds: 347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 206.80129721927187,
            "unit": "iter/sec",
            "range": "stddev: 0.000273968439175095",
            "extra": "mean: 4.83555960937565 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 68.96497041369514,
            "unit": "iter/sec",
            "range": "stddev: 0.000841044117961878",
            "extra": "mean: 14.500114971432206 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3398.423440466504,
            "unit": "iter/sec",
            "range": "stddev: 0.0003011584550339743",
            "extra": "mean: 294.25409090949813 usec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1264707.003026214,
            "unit": "iter/sec",
            "range": "stddev: 1.7876074647538747e-7",
            "extra": "mean: 790.6969737711436 nsec\nrounds: 135117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 80.13849503687062,
            "unit": "iter/sec",
            "range": "stddev: 0.000723951849737271",
            "extra": "mean: 12.478397548393113 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 801.3184091794028,
            "unit": "iter/sec",
            "range": "stddev: 0.00008188379647601747",
            "extra": "mean: 1.2479433749987834 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1242.7089109679737,
            "unit": "iter/sec",
            "range": "stddev: 0.00002786475401387703",
            "extra": "mean: 804.6936745798964 usec\nrounds: 1011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 230.09946848097673,
            "unit": "iter/sec",
            "range": "stddev: 0.000058397991919206396",
            "extra": "mean: 4.345946588236791 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11367707115010328,
            "unit": "iter/sec",
            "range": "stddev: 0.07783096993069921",
            "extra": "mean: 8.796848739000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 208.59643734120957,
            "unit": "iter/sec",
            "range": "stddev: 0.00027948087772683303",
            "extra": "mean: 4.793945729592015 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3613159.4418571983,
            "unit": "iter/sec",
            "range": "stddev: 1.592341615544402e-8",
            "extra": "mean: 276.76608688073907 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 512266.5248503106,
            "unit": "iter/sec",
            "range": "stddev: 1.801118984790459e-7",
            "extra": "mean: 1.952108817362622 usec\nrounds: 18214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 235.98501278823485,
            "unit": "iter/sec",
            "range": "stddev: 0.000022755161189065833",
            "extra": "mean: 4.237557242236256 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3715890.086677039,
            "unit": "iter/sec",
            "range": "stddev: 1.998111241867105e-8",
            "extra": "mean: 269.11452617660365 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 214.0006579979874,
            "unit": "iter/sec",
            "range": "stddev: 0.0002471053675173445",
            "extra": "mean: 4.672882828282728 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4954088256093665,
            "unit": "iter/sec",
            "range": "stddev: 0.06587339369426314",
            "extra": "mean: 2.018534891399992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8323.281609837924,
            "unit": "iter/sec",
            "range": "stddev: 0.000017231570478639613",
            "extra": "mean: 120.14491962136945 usec\nrounds: 3384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 437.74568419987366,
            "unit": "iter/sec",
            "range": "stddev: 0.00004439763094528225",
            "extra": "mean: 2.284431431523611 msec\nrounds: 387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 230.73021554719807,
            "unit": "iter/sec",
            "range": "stddev: 0.00005556396071214715",
            "extra": "mean: 4.334066076384523 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1268832.693836994,
            "unit": "iter/sec",
            "range": "stddev: 2.331811153841125e-7",
            "extra": "mean: 788.1259718930834 nsec\nrounds: 79994"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4503.598087411316,
            "unit": "iter/sec",
            "range": "stddev: 0.00011154973965621533",
            "extra": "mean: 222.04468085090681 usec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16491.54620008358,
            "unit": "iter/sec",
            "range": "stddev: 0.000015185253453241833",
            "extra": "mean: 60.637128130225406 usec\nrounds: 6150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.14905570050351,
            "unit": "iter/sec",
            "range": "stddev: 0.00016384653967416057",
            "extra": "mean: 18.815009727266453 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9175937.132643005,
            "unit": "iter/sec",
            "range": "stddev: 6.51412301795638e-9",
            "extra": "mean: 108.98069434700037 nsec\nrounds: 89278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 47.1383470804946,
            "unit": "iter/sec",
            "range": "stddev: 0.0009294250948412501",
            "extra": "mean: 21.21415072727042 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1457150.3653572588,
            "unit": "iter/sec",
            "range": "stddev: 1.7961490354939918e-7",
            "extra": "mean: 686.2709736581122 nsec\nrounds: 107516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 130.17614552075298,
            "unit": "iter/sec",
            "range": "stddev: 0.0012925096520573346",
            "extra": "mean: 7.681898983870112 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3456.2438495874294,
            "unit": "iter/sec",
            "range": "stddev: 0.00004401102838831235",
            "extra": "mean: 289.33143710892085 usec\nrounds: 1757"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1118300.8978694584,
            "unit": "iter/sec",
            "range": "stddev: 1.799066667099623e-7",
            "extra": "mean: 894.213714667635 nsec\nrounds: 188644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.80284605825329,
            "unit": "iter/sec",
            "range": "stddev: 0.001176567175802155",
            "extra": "mean: 128.1583658750094 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 74.25561475107116,
            "unit": "iter/sec",
            "range": "stddev: 0.0009547544241450944",
            "extra": "mean: 13.466995099997803 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 112.9177211913866,
            "unit": "iter/sec",
            "range": "stddev: 0.015314590129113057",
            "extra": "mean: 8.856005854963005 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3468005715521014,
            "unit": "iter/sec",
            "range": "stddev: 0.0013708976282714442",
            "extra": "mean: 742.5004274000003 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 210.23976034557643,
            "unit": "iter/sec",
            "range": "stddev: 0.0002609198742404304",
            "extra": "mean: 4.75647421951145 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4625.772857529893,
            "unit": "iter/sec",
            "range": "stddev: 0.00005825133262492221",
            "extra": "mean: 216.180091586682 usec\nrounds: 1878"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120014.43567161172,
            "unit": "iter/sec",
            "range": "stddev: 5.165970877520915e-7",
            "extra": "mean: 8.332330976718833 usec\nrounds: 31543"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 70.53520199394345,
            "unit": "iter/sec",
            "range": "stddev: 0.00033946944637002575",
            "extra": "mean: 14.177318157901722 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6681082446278303,
            "unit": "iter/sec",
            "range": "stddev: 0.012273506975898522",
            "extra": "mean: 1.4967634481999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4723.076414257539,
            "unit": "iter/sec",
            "range": "stddev: 0.000060191909769839826",
            "extra": "mean: 211.72640717421012 usec\nrounds: 2063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.379352331460222,
            "unit": "iter/sec",
            "range": "stddev: 0.0009345130485707187",
            "extra": "mean: 34.03751004167551 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 198.589782010871,
            "unit": "iter/sec",
            "range": "stddev: 0.00026976194238950414",
            "extra": "mean: 5.035505804348277 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.519591362309022,
            "unit": "iter/sec",
            "range": "stddev: 0.0002978566297225676",
            "extra": "mean: 86.8086348333416 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 109.30882795871626,
            "unit": "iter/sec",
            "range": "stddev: 0.017048912959920132",
            "extra": "mean: 9.148391933885522 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9382.30466901695,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024989989786301015",
            "extra": "mean: 106.58362047251414 usec\nrounds: 4943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.12997648629959,
            "unit": "iter/sec",
            "range": "stddev: 0.0008162168078731397",
            "extra": "mean: 31.123583312499647 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 75.60181573901784,
            "unit": "iter/sec",
            "range": "stddev: 0.0002801110507552652",
            "extra": "mean: 13.227195540541805 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 78.820296096036,
            "unit": "iter/sec",
            "range": "stddev: 0.0008791852706329169",
            "extra": "mean: 12.687087584415858 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 146.97482363541033,
            "unit": "iter/sec",
            "range": "stddev: 0.00005774603089396904",
            "extra": "mean: 6.803886374993222 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 75.45709100000379,
            "unit": "iter/sec",
            "range": "stddev: 0.0008117587310715483",
            "extra": "mean: 13.25256495774466 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.214351669491308,
            "unit": "iter/sec",
            "range": "stddev: 0.000347423230512611",
            "extra": "mean: 237.28442200000472 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9046.32200784135,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026962431302010353",
            "extra": "mean: 110.54216278540606 usec\nrounds: 4423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 121.08203540092815,
            "unit": "iter/sec",
            "range": "stddev: 0.00011839459512010405",
            "extra": "mean: 8.258863477879185 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 78.4619674815683,
            "unit": "iter/sec",
            "range": "stddev: 0.0008295455370821511",
            "extra": "mean: 12.745028350645333 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 349.01316187080414,
            "unit": "iter/sec",
            "range": "stddev: 0.0001479890585236944",
            "extra": "mean: 2.865221456519668 msec\nrounds: 322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 183.0729141181109,
            "unit": "iter/sec",
            "range": "stddev: 0.0005333712987238968",
            "extra": "mean: 5.462304485713503 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 79.25843980768963,
            "unit": "iter/sec",
            "range": "stddev: 0.00019246576273807144",
            "extra": "mean: 12.616952875004491 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4045.248860604091,
            "unit": "iter/sec",
            "range": "stddev: 0.00006182703044561908",
            "extra": "mean: 247.20357991786605 usec\nrounds: 1952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 122.9473563465804,
            "unit": "iter/sec",
            "range": "stddev: 0.0008615828287348689",
            "extra": "mean: 8.133562442620292 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.435302433455824,
            "unit": "iter/sec",
            "range": "stddev: 0.00034425339603811494",
            "extra": "mean: 22.504629095245882 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 118.87683061138547,
            "unit": "iter/sec",
            "range": "stddev: 0.00012251647065469824",
            "extra": "mean: 8.412068145297816 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 133.74927175711727,
            "unit": "iter/sec",
            "range": "stddev: 0.000911642556910762",
            "extra": "mean: 7.476676223074737 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3889.9705886357387,
            "unit": "iter/sec",
            "range": "stddev: 0.00006322589086036285",
            "extra": "mean: 257.0713523956777 usec\nrounds: 2588"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 26.22599649279293,
            "unit": "iter/sec",
            "range": "stddev: 0.034240390384682566",
            "extra": "mean: 38.13010500000662 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 534.9824951136289,
            "unit": "iter/sec",
            "range": "stddev: 0.00005906570343138156",
            "extra": "mean: 1.8692200382885473 msec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 48448.994376644114,
            "unit": "iter/sec",
            "range": "stddev: 7.255785804424852e-7",
            "extra": "mean: 20.640263288562117 usec\nrounds: 10893"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 202.79402788452788,
            "unit": "iter/sec",
            "range": "stddev: 0.00028676566365103926",
            "extra": "mean: 4.931111682289806 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 206.31921582632157,
            "unit": "iter/sec",
            "range": "stddev: 0.00013246353745337495",
            "extra": "mean: 4.846858282176657 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.39453509587331,
            "unit": "iter/sec",
            "range": "stddev: 0.0005797817911761243",
            "extra": "mean: 49.032743100005405 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 309299.08074019186,
            "unit": "iter/sec",
            "range": "stddev: 4.778999735344381e-7",
            "extra": "mean: 3.233116624876069 usec\nrounds: 1612"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4414170.19707796,
            "unit": "iter/sec",
            "range": "stddev: 1.7943025462162496e-8",
            "extra": "mean: 226.54314522407566 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 57.64922840562648,
            "unit": "iter/sec",
            "range": "stddev: 0.00038097905746420347",
            "extra": "mean: 17.346285937495765 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 124.99984449423987,
            "unit": "iter/sec",
            "range": "stddev: 0.00010073192291876716",
            "extra": "mean: 8.000009952381031 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 74.48205600493935,
            "unit": "iter/sec",
            "range": "stddev: 0.0008307097626467182",
            "extra": "mean: 13.426052577464885 msec\nrounds: 71"
          }
        ]
      }
    ]
  }
}