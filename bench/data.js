window.BENCHMARK_DATA = {
  "lastUpdate": 1681385256196,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "04b9f19074e6d47bac800d0c553c75b95efccf3e",
          "message": "fix(docs): fix failing doctests",
          "timestamp": "2023-04-13T13:15:11+02:00",
          "tree_id": "31f54e199f3ed69e8e44b08505dc38559b3c518c",
          "url": "https://github.com/ibis-project/ibis/commit/04b9f19074e6d47bac800d0c553c75b95efccf3e"
        },
        "date": 1681385177854,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1254.368259929415,
            "unit": "iter/sec",
            "range": "stddev: 0.004588211731032323",
            "extra": "mean: 797.2140494500964 usec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5628617.722902191,
            "unit": "iter/sec",
            "range": "stddev: 1.096554352849565e-8",
            "extra": "mean: 177.6635133581251 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.401450393544934,
            "unit": "iter/sec",
            "range": "stddev: 0.01186575359024001",
            "extra": "mean: 19.08344124999992 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6364940.53028254,
            "unit": "iter/sec",
            "range": "stddev: 5.872584024427341e-9",
            "extra": "mean: 157.11065881012217 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7021050.201418222,
            "unit": "iter/sec",
            "range": "stddev: 3.6897498314976013e-9",
            "extra": "mean: 142.42883490531938 nsec\nrounds: 69445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.07565768395537,
            "unit": "iter/sec",
            "range": "stddev: 0.0002185629966899035",
            "extra": "mean: 10.860633800004393 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.03046820032847,
            "unit": "iter/sec",
            "range": "stddev: 0.00006614981120822733",
            "extra": "mean: 6.133822781955215 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.823118241385601,
            "unit": "iter/sec",
            "range": "stddev: 0.00032641274852259844",
            "extra": "mean: 171.72929666666903 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 97.1397550328144,
            "unit": "iter/sec",
            "range": "stddev: 0.0006264143419504516",
            "extra": "mean: 10.294446384615586 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 279.97138954998684,
            "unit": "iter/sec",
            "range": "stddev: 0.00022202987221567832",
            "extra": "mean: 3.5717935379302657 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 5.8609573371410155,
            "unit": "iter/sec",
            "range": "stddev: 0.29927999030123964",
            "extra": "mean: 170.6205901999965 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 286.70575116388375,
            "unit": "iter/sec",
            "range": "stddev: 0.000241022132034664",
            "extra": "mean: 3.4878965487803915 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2737990.7878550813,
            "unit": "iter/sec",
            "range": "stddev: 1.2934346937507964e-8",
            "extra": "mean: 365.2313237998602 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8232.507074987085,
            "unit": "iter/sec",
            "range": "stddev: 0.00001271060210208437",
            "extra": "mean: 121.46968000043519 usec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.08102169871357,
            "unit": "iter/sec",
            "range": "stddev: 0.0006844147979317952",
            "extra": "mean: 38.34205621052508 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 83.17197222613045,
            "unit": "iter/sec",
            "range": "stddev: 0.01442299348144098",
            "extra": "mean: 12.023281079366136 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.78886060198109,
            "unit": "iter/sec",
            "range": "stddev: 0.0006907723718559372",
            "extra": "mean: 9.82425772413585 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13942.450057269873,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014518270791655374",
            "extra": "mean: 71.72340556304019 usec\nrounds: 7370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.73443449790315,
            "unit": "iter/sec",
            "range": "stddev: 0.0001363726600064328",
            "extra": "mean: 9.927092011628014 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147669.24893998922,
            "unit": "iter/sec",
            "range": "stddev: 3.148924018825369e-7",
            "extra": "mean: 6.771890608087175 usec\nrounds: 39683"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.35043448264406,
            "unit": "iter/sec",
            "range": "stddev: 0.0007437190292273727",
            "extra": "mean: 10.378780390244462 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.20725736746424,
            "unit": "iter/sec",
            "range": "stddev: 0.0006839326646968242",
            "extra": "mean: 10.287297750000146 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2124.7322293901298,
            "unit": "iter/sec",
            "range": "stddev: 0.0000854467761743326",
            "extra": "mean: 470.64754144903895 usec\nrounds: 1339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2737368.4645290687,
            "unit": "iter/sec",
            "range": "stddev: 1.2591793008748747e-8",
            "extra": "mean: 365.3143568204978 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1762.5819362383331,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051806968482138765",
            "extra": "mean: 567.3495112143154 usec\nrounds: 1293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.7339971008237,
            "unit": "iter/sec",
            "range": "stddev: 0.00022057902864817022",
            "extra": "mean: 8.422187616162235 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.39048207281667,
            "unit": "iter/sec",
            "range": "stddev: 0.0002728171145637965",
            "extra": "mean: 3.725914541666538 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 531.8037825000729,
            "unit": "iter/sec",
            "range": "stddev: 0.0000772504622152186",
            "extra": "mean: 1.880392793181878 msec\nrounds: 440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 78.3374692518208,
            "unit": "iter/sec",
            "range": "stddev: 0.00010420487156125731",
            "extra": "mean: 12.765283453125553 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.565378860837036,
            "unit": "iter/sec",
            "range": "stddev: 0.025472180843685476",
            "extra": "mean: 27.348274000000572 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 82.68212375898398,
            "unit": "iter/sec",
            "range": "stddev: 0.0180772169549592",
            "extra": "mean: 12.094512749998675 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8482524603771284,
            "unit": "iter/sec",
            "range": "stddev: 0.0018245116921308414",
            "extra": "mean: 1.1788943111999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 97.28645882289283,
            "unit": "iter/sec",
            "range": "stddev: 0.000674405570648137",
            "extra": "mean: 10.278922802817512 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 154.42334230354234,
            "unit": "iter/sec",
            "range": "stddev: 0.004066131743406693",
            "extra": "mean: 6.475704936073392 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11984.874729475521,
            "unit": "iter/sec",
            "range": "stddev: 0.000013838888189980397",
            "extra": "mean: 83.438502493531 usec\nrounds: 4010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8838241824130509,
            "unit": "iter/sec",
            "range": "stddev: 0.005866212044632713",
            "extra": "mean: 1.1314467513999915 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 752.313848229243,
            "unit": "iter/sec",
            "range": "stddev: 0.000021841310881205622",
            "extra": "mean: 1.3292324770489705 msec\nrounds: 610"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2166.026919312369,
            "unit": "iter/sec",
            "range": "stddev: 0.00008296836763346295",
            "extra": "mean: 461.67477933167237 usec\nrounds: 1287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2166.459898129136,
            "unit": "iter/sec",
            "range": "stddev: 0.00008358096368850653",
            "extra": "mean: 461.58251111112565 usec\nrounds: 1215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.89212448300721,
            "unit": "iter/sec",
            "range": "stddev: 0.0007377351559182402",
            "extra": "mean: 9.814301204081502 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2120.3455048876876,
            "unit": "iter/sec",
            "range": "stddev: 0.00011672161348240182",
            "extra": "mean: 471.62125120404323 usec\nrounds: 1246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4500.121955231691,
            "unit": "iter/sec",
            "range": "stddev: 0.000025066684631725352",
            "extra": "mean: 222.21619990485672 usec\nrounds: 2101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.34802349054319,
            "unit": "iter/sec",
            "range": "stddev: 0.025802681297873036",
            "extra": "mean: 24.784361499997168 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2224.267893873521,
            "unit": "iter/sec",
            "range": "stddev: 0.00008028462570743537",
            "extra": "mean: 449.58613247728834 usec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1783472.9760647833,
            "unit": "iter/sec",
            "range": "stddev: 2.1696838649743737e-7",
            "extra": "mean: 560.7037580162784 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.568716088850549,
            "unit": "iter/sec",
            "range": "stddev: 0.0006741122943770491",
            "extra": "mean: 389.2995431999964 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.9426213672345,
            "unit": "iter/sec",
            "range": "stddev: 0.0008581872537056617",
            "extra": "mean: 9.906618101009565 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 95.94882775407287,
            "unit": "iter/sec",
            "range": "stddev: 0.0007537033940691389",
            "extra": "mean: 10.422222172042657 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.23417315166994,
            "unit": "iter/sec",
            "range": "stddev: 0.0007828587959987137",
            "extra": "mean: 23.677508647057767 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 283.2242649988665,
            "unit": "iter/sec",
            "range": "stddev: 0.00025301888382692835",
            "extra": "mean: 3.5307709246028125 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 299.9236746408063,
            "unit": "iter/sec",
            "range": "stddev: 0.00011352749633291197",
            "extra": "mean: 3.334181608696335 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 89.87811423493253,
            "unit": "iter/sec",
            "range": "stddev: 0.0005972555406564584",
            "extra": "mean: 11.126179142856719 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1712773511172296,
            "unit": "iter/sec",
            "range": "stddev: 0.07819383523326855",
            "extra": "mean: 5.838483567599996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7901511811708966,
            "unit": "iter/sec",
            "range": "stddev: 0.001700144201842663",
            "extra": "mean: 558.6120381999933 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2237.5716419184055,
            "unit": "iter/sec",
            "range": "stddev: 0.00008027836116073342",
            "extra": "mean: 446.91306471092014 usec\nrounds: 1159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 256.21931693259467,
            "unit": "iter/sec",
            "range": "stddev: 0.0003783831947777765",
            "extra": "mean: 3.9029063537121083 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 264.6180418485665,
            "unit": "iter/sec",
            "range": "stddev: 0.0003831344969758531",
            "extra": "mean: 3.779031818897186 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.873685265787298,
            "unit": "iter/sec",
            "range": "stddev: 0.004581113174957261",
            "extra": "mean: 1.1445769307999911 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.34768907540038,
            "unit": "iter/sec",
            "range": "stddev: 0.0007914079212855269",
            "extra": "mean: 9.86702320618305 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 111.29571518690203,
            "unit": "iter/sec",
            "range": "stddev: 0.01544655562537264",
            "extra": "mean: 8.98507187200039 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.934182779142105,
            "unit": "iter/sec",
            "range": "stddev: 0.0010992256942773245",
            "extra": "mean: 23.291464638889337 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 516727.5104099016,
            "unit": "iter/sec",
            "range": "stddev: 3.8136438919398035e-7",
            "extra": "mean: 1.935255971192119 usec\nrounds: 2219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 99.82314585432812,
            "unit": "iter/sec",
            "range": "stddev: 0.0007046485263603317",
            "extra": "mean: 10.01771674736939 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2141.1221907372997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000871814321980155",
            "extra": "mean: 467.04480684292383 usec\nrounds: 1812"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 289.8177845416346,
            "unit": "iter/sec",
            "range": "stddev: 0.000030131647360829754",
            "extra": "mean: 3.4504438765949583 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11961271.578377103,
            "unit": "iter/sec",
            "range": "stddev: 3.0355443000844826e-9",
            "extra": "mean: 83.60315150828397 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 97.16534630142168,
            "unit": "iter/sec",
            "range": "stddev: 0.0007247350347886748",
            "extra": "mean: 10.29173504819144 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 282.3320845898241,
            "unit": "iter/sec",
            "range": "stddev: 0.00024579943011591044",
            "extra": "mean: 3.5419282985595264 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7122832298065179,
            "unit": "iter/sec",
            "range": "stddev: 0.009301748850324774",
            "extra": "mean: 1.4039359038000043 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.22063086926076,
            "unit": "iter/sec",
            "range": "stddev: 0.00009154321202047064",
            "extra": "mean: 6.241393474576911 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 274.4104111505238,
            "unit": "iter/sec",
            "range": "stddev: 0.000293925456716262",
            "extra": "mean: 3.6441766032392433 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.482276070531908,
            "unit": "iter/sec",
            "range": "stddev: 0.04281768016359661",
            "extra": "mean: 74.17145256250102 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2737182.9159891983,
            "unit": "iter/sec",
            "range": "stddev: 1.4848390518697632e-8",
            "extra": "mean: 365.3391208010021 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.17448927392219,
            "unit": "iter/sec",
            "range": "stddev: 0.0007963857325932101",
            "extra": "mean: 9.883914484535488 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1166.0071339151016,
            "unit": "iter/sec",
            "range": "stddev: 0.000011646241109107797",
            "extra": "mean: 857.627685897856 usec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.50044649494215,
            "unit": "iter/sec",
            "range": "stddev: 0.0006321503983269833",
            "extra": "mean: 15.999885698111372 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.31333307916036,
            "unit": "iter/sec",
            "range": "stddev: 0.00035508507492152677",
            "extra": "mean: 9.318506576087275 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.177403512310534,
            "unit": "iter/sec",
            "range": "stddev: 0.00022804583952101606",
            "extra": "mean: 89.46621627273483 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9976.569166582665,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020495264178998353",
            "extra": "mean: 100.23485862751113 usec\nrounds: 5581"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.08018855805292,
            "unit": "iter/sec",
            "range": "stddev: 0.00042510075834266945",
            "extra": "mean: 13.498885727273091 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.6905348608725,
            "unit": "iter/sec",
            "range": "stddev: 0.00001817360756839212",
            "extra": "mean: 5.1101091869923945 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 82.36509179722013,
            "unit": "iter/sec",
            "range": "stddev: 0.016801465027891788",
            "extra": "mean: 12.141065810525214 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 673.6364125142251,
            "unit": "iter/sec",
            "range": "stddev: 0.0001349307207923017",
            "extra": "mean: 1.48448032413759 msec\nrounds: 580"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.89758188298453,
            "unit": "iter/sec",
            "range": "stddev: 0.0007681409991510306",
            "extra": "mean: 9.911040297871015 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 793095.4378388401,
            "unit": "iter/sec",
            "range": "stddev: 1.4976595928513488e-7",
            "extra": "mean: 1.2608823002751954 usec\nrounds: 24571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 160.9124008287318,
            "unit": "iter/sec",
            "range": "stddev: 0.00019090628673935615",
            "extra": "mean: 6.214561431249521 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72504.61463438485,
            "unit": "iter/sec",
            "range": "stddev: 3.893979220552617e-7",
            "extra": "mean: 13.792225571332896 usec\nrounds: 14266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.05456455023996,
            "unit": "iter/sec",
            "range": "stddev: 0.00023371050083888196",
            "extra": "mean: 9.004582603604826 msec\nrounds: 111"
          }
        ]
      }
    ]
  }
}