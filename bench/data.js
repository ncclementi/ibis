window.BENCHMARK_DATA = {
  "lastUpdate": 1678882668774,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "92fc997e579ec7ac334fea255f7f98ab38fc0a19",
          "message": "chore(deps): update dependency mkdocs-material to >=8.2.1,<9.1.4",
          "timestamp": "2023-03-15T08:09:52-04:00",
          "tree_id": "3e456388efa43900f4cc52eebc130c0fc06ce6de",
          "url": "https://github.com/ibis-project/ibis/commit/92fc997e579ec7ac334fea255f7f98ab38fc0a19"
        },
        "date": 1678882588758,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.10917998557869,
            "unit": "iter/sec",
            "range": "stddev: 0.00037887932280485456",
            "extra": "mean: 10.975842392152865 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5117.17863048474,
            "unit": "iter/sec",
            "range": "stddev: 0.00005300411162762282",
            "extra": "mean: 195.42018604601105 usec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12638.127248925099,
            "unit": "iter/sec",
            "range": "stddev: 0.000012988339311010324",
            "extra": "mean: 79.12564736085025 usec\nrounds: 4869"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.35037002180458,
            "unit": "iter/sec",
            "range": "stddev: 0.0004762690222128728",
            "extra": "mean: 8.900727249994134 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11928300.363012813,
            "unit": "iter/sec",
            "range": "stddev: 3.840715988558318e-9",
            "extra": "mean: 83.83424038347651 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5397.021070240803,
            "unit": "iter/sec",
            "range": "stddev: 0.00005105467939552968",
            "extra": "mean: 185.28739965719313 usec\nrounds: 583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 335.5459427973893,
            "unit": "iter/sec",
            "range": "stddev: 0.00002193571428764676",
            "extra": "mean: 2.980217825503032 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 52.77281173546425,
            "unit": "iter/sec",
            "range": "stddev: 0.002041863015591416",
            "extra": "mean: 18.949151411767257 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 242.57281867803619,
            "unit": "iter/sec",
            "range": "stddev: 0.009454039900392779",
            "extra": "mean: 4.122473430657898 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 294.03059212928815,
            "unit": "iter/sec",
            "range": "stddev: 0.0002586413822495268",
            "extra": "mean: 3.4010066529413723 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.9365948410298,
            "unit": "iter/sec",
            "range": "stddev: 0.00006745335815594717",
            "extra": "mean: 1.845234312499855 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 287.99662649851973,
            "unit": "iter/sec",
            "range": "stddev: 0.00010241381586118758",
            "extra": "mean: 3.4722628947361645 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2725622.7080383017,
            "unit": "iter/sec",
            "range": "stddev: 1.7827073153932358e-8",
            "extra": "mean: 366.88863687928364 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.710933257142,
            "unit": "iter/sec",
            "range": "stddev: 0.00009872641238859023",
            "extra": "mean: 8.423823927269455 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.09581677951142,
            "unit": "iter/sec",
            "range": "stddev: 0.0142991098485362",
            "extra": "mean: 9.891606120369808 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6137450.946149908,
            "unit": "iter/sec",
            "range": "stddev: 1.0695156890790548e-8",
            "extra": "mean: 162.93409247141292 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5031.217858708018,
            "unit": "iter/sec",
            "range": "stddev: 0.00014014636815686733",
            "extra": "mean: 198.7590337137166 usec\nrounds: 1839"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 514081.8829366542,
            "unit": "iter/sec",
            "range": "stddev: 3.8339217652747214e-7",
            "extra": "mean: 1.9452154086574205 usec\nrounds: 1908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.678432235157416,
            "unit": "iter/sec",
            "range": "stddev: 0.0005767183903592983",
            "extra": "mean: 24.583051633335153 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8328.026791264349,
            "unit": "iter/sec",
            "range": "stddev: 0.000015228750359047726",
            "extra": "mean: 120.07646289622245 usec\nrounds: 3059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 97.70855764320038,
            "unit": "iter/sec",
            "range": "stddev: 0.0009291717979032046",
            "extra": "mean: 10.234518082353361 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.216109951318508,
            "unit": "iter/sec",
            "range": "stddev: 0.0009343344036421265",
            "extra": "mean: 65.71981953333268 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.4415258028093,
            "unit": "iter/sec",
            "range": "stddev: 0.00009813876228584598",
            "extra": "mean: 13.61627483999996 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 109.84740103663574,
            "unit": "iter/sec",
            "range": "stddev: 0.0008856517282876842",
            "extra": "mean: 9.103538095238914 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6717583863632273,
            "unit": "iter/sec",
            "range": "stddev: 0.0010188719979364923",
            "extra": "mean: 1.4886304663999965 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1170.8974576703013,
            "unit": "iter/sec",
            "range": "stddev: 0.000012564590740072868",
            "extra": "mean: 854.0457522127251 usec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147183.96688201136,
            "unit": "iter/sec",
            "range": "stddev: 4.967607396252069e-7",
            "extra": "mean: 6.7942182914640465 usec\nrounds: 35842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.372651909547871,
            "unit": "iter/sec",
            "range": "stddev: 0.00033304016638547993",
            "extra": "mean: 96.40736127272476 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 60.05882153473958,
            "unit": "iter/sec",
            "range": "stddev: 0.000261712953884836",
            "extra": "mean: 16.650343354166115 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 133.53485711957077,
            "unit": "iter/sec",
            "range": "stddev: 0.004117637022199908",
            "extra": "mean: 7.488681394286232 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5149.003432213725,
            "unit": "iter/sec",
            "range": "stddev: 0.00007519495072298669",
            "extra": "mean: 194.21233898266547 usec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 272.1142872655032,
            "unit": "iter/sec",
            "range": "stddev: 0.0003593285159300305",
            "extra": "mean: 3.674926480520647 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5096.82042297967,
            "unit": "iter/sec",
            "range": "stddev: 0.000059777876179474637",
            "extra": "mean: 196.20075203971706 usec\nrounds: 2819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5581.4259316033385,
            "unit": "iter/sec",
            "range": "stddev: 0.000053104461663211",
            "extra": "mean: 179.16568494401514 usec\nrounds: 2225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 746.1219772048169,
            "unit": "iter/sec",
            "range": "stddev: 0.00004885577879048733",
            "extra": "mean: 1.3402634295082445 msec\nrounds: 610"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 250.16887218714916,
            "unit": "iter/sec",
            "range": "stddev: 0.01260956847968723",
            "extra": "mean: 3.9972998689137813 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 117.145005992216,
            "unit": "iter/sec",
            "range": "stddev: 0.0008301566231816956",
            "extra": "mean: 8.536428775004268 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 743008.3375419242,
            "unit": "iter/sec",
            "range": "stddev: 0.000001277100678459283",
            "extra": "mean: 1.34587991745594 usec\nrounds: 21835"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1792.3724623408525,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075194340397921154",
            "extra": "mean: 557.9197521780668 usec\nrounds: 1263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.71020389250293,
            "unit": "iter/sec",
            "range": "stddev: 0.0009102795369188323",
            "extra": "mean: 9.831855229165557 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 94.88067332118823,
            "unit": "iter/sec",
            "range": "stddev: 0.000998693830962118",
            "extra": "mean: 10.539554210527358 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 116.65837311773515,
            "unit": "iter/sec",
            "range": "stddev: 0.0008506070405894682",
            "extra": "mean: 8.57203793670918 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13317.685067662454,
            "unit": "iter/sec",
            "range": "stddev: 0.00000413901195846753",
            "extra": "mean: 75.0881249195602 usec\nrounds: 6212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.26333050894193,
            "unit": "iter/sec",
            "range": "stddev: 0.0011741554724726188",
            "extra": "mean: 30.994940206896665 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.88633200348843,
            "unit": "iter/sec",
            "range": "stddev: 0.0007949249715496222",
            "extra": "mean: 9.71946400000045 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.98821891816081,
            "unit": "iter/sec",
            "range": "stddev: 0.00038878585219765863",
            "extra": "mean: 13.335428076927132 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 117.25410481933416,
            "unit": "iter/sec",
            "range": "stddev: 0.0008507182872375224",
            "extra": "mean: 8.528486073394243 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1961806.1574975394,
            "unit": "iter/sec",
            "range": "stddev: 1.2897054088536995e-7",
            "extra": "mean: 509.73435687223565 nsec\nrounds: 156251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5111.95159294604,
            "unit": "iter/sec",
            "range": "stddev: 0.000025549611072473437",
            "extra": "mean: 195.6200057488603 usec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.823124677823486,
            "unit": "iter/sec",
            "range": "stddev: 0.000612426910548751",
            "extra": "mean: 20.910386068180095 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.5760676200191,
            "unit": "iter/sec",
            "range": "stddev: 0.00011845905923847136",
            "extra": "mean: 6.227578086956026 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 285.4613149851085,
            "unit": "iter/sec",
            "range": "stddev: 0.00005205261221138153",
            "extra": "mean: 3.5031016376147726 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 312.04189255137743,
            "unit": "iter/sec",
            "range": "stddev: 0.00022878904731462793",
            "extra": "mean: 3.20469790714191 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.493056196530671,
            "unit": "iter/sec",
            "range": "stddev: 0.0029040021384759683",
            "extra": "mean: 401.1141030000033 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 102.93375417113407,
            "unit": "iter/sec",
            "range": "stddev: 0.020681239917939694",
            "extra": "mean: 9.714986187499145 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.15525735242744,
            "unit": "iter/sec",
            "range": "stddev: 0.0009571609651442999",
            "extra": "mean: 9.88579364210379 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.03263565918942,
            "unit": "iter/sec",
            "range": "stddev: 0.00033134873566766657",
            "extra": "mean: 9.08821272897033 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6819188523218913,
            "unit": "iter/sec",
            "range": "stddev: 0.0006497393637269354",
            "extra": "mean: 594.5590053999922 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 304.4544616729576,
            "unit": "iter/sec",
            "range": "stddev: 0.00024870511151962405",
            "extra": "mean: 3.2845634598523024 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2732192.0821697945,
            "unit": "iter/sec",
            "range": "stddev: 1.868605592006596e-8",
            "extra": "mean: 366.0064775552309 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8525767865762944,
            "unit": "iter/sec",
            "range": "stddev: 0.016959148605036077",
            "extra": "mean: 1.1729148808000218 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.594566629714656,
            "unit": "iter/sec",
            "range": "stddev: 0.0008343744932894965",
            "extra": "mean: 28.906273366669666 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5434.732546365107,
            "unit": "iter/sec",
            "range": "stddev: 0.00006103237832034109",
            "extra": "mean: 184.00169492587568 usec\nrounds: 1675"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71719.37482147371,
            "unit": "iter/sec",
            "range": "stddev: 6.155594606921382e-7",
            "extra": "mean: 13.943233644872583 usec\nrounds: 12626"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 92.02563644875318,
            "unit": "iter/sec",
            "range": "stddev: 0.025255515347103585",
            "extra": "mean: 10.866537180178867 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1784458.2452988366,
            "unit": "iter/sec",
            "range": "stddev: 1.5081679023249432e-7",
            "extra": "mean: 560.3941715276917 nsec\nrounds: 89286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 296.40609990721526,
            "unit": "iter/sec",
            "range": "stddev: 0.0003241138276176375",
            "extra": "mean: 3.3737497315778335 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 681.6246411304642,
            "unit": "iter/sec",
            "range": "stddev: 0.000059033437335360236",
            "extra": "mean: 1.4670831124026193 msec\nrounds: 516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8210827727531225,
            "unit": "iter/sec",
            "range": "stddev: 0.0027660229515095226",
            "extra": "mean: 1.2179040082000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.53187624832981,
            "unit": "iter/sec",
            "range": "stddev: 0.0008577492783308883",
            "extra": "mean: 9.94709377083384 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.388162779272776,
            "unit": "iter/sec",
            "range": "stddev: 0.001073370409834519",
            "extra": "mean: 27.481464400000277 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.52585281669401,
            "unit": "iter/sec",
            "range": "stddev: 0.0013019548136389263",
            "extra": "mean: 44.39343576190356 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5580.802531328169,
            "unit": "iter/sec",
            "range": "stddev: 0.00005430279586294931",
            "extra": "mean: 179.18569854182084 usec\nrounds: 1851"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1660784788687598,
            "unit": "iter/sec",
            "range": "stddev: 0.1965650068480572",
            "extra": "mean: 6.021249753800009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.539792834203,
            "unit": "iter/sec",
            "range": "stddev: 0.0004581510688746119",
            "extra": "mean: 180.51216533332118 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.71974802401544,
            "unit": "iter/sec",
            "range": "stddev: 0.00005315106575809664",
            "extra": "mean: 5.188881836205943 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 305.4830885526963,
            "unit": "iter/sec",
            "range": "stddev: 0.00024940153129507646",
            "extra": "mean: 3.2735036323540982 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 148.43805897255018,
            "unit": "iter/sec",
            "range": "stddev: 0.00033214757151907016",
            "extra": "mean: 6.736816736366274 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12033.751326651722,
            "unit": "iter/sec",
            "range": "stddev: 0.000012523286040753895",
            "extra": "mean: 83.0996065030239 usec\nrounds: 3629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.40215667262291,
            "unit": "iter/sec",
            "range": "stddev: 0.0008694784888129869",
            "extra": "mean: 10.940660881577681 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.8654278288502,
            "unit": "iter/sec",
            "range": "stddev: 0.0008846080235769495",
            "extra": "mean: 9.721439176472607 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5612908.11984196,
            "unit": "iter/sec",
            "range": "stddev: 9.453884350405838e-9",
            "extra": "mean: 178.16076419716305 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 227.1979256645075,
            "unit": "iter/sec",
            "range": "stddev: 0.003567250055892245",
            "extra": "mean: 4.401448635920439 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.87463488624691,
            "unit": "iter/sec",
            "range": "stddev: 0.00858821116543105",
            "extra": "mean: 1.143334225199999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.67922038119231,
            "unit": "iter/sec",
            "range": "stddev: 0.00006886337941176982",
            "extra": "mean: 10.343484319144729 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.50429628588884,
            "unit": "iter/sec",
            "range": "stddev: 0.00007266803061299272",
            "extra": "mean: 6.078868592356514 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 118.19747412667743,
            "unit": "iter/sec",
            "range": "stddev: 0.0008016013938235423",
            "extra": "mean: 8.46041768141556 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7015262.6331876395,
            "unit": "iter/sec",
            "range": "stddev: 6.020394527200408e-9",
            "extra": "mean: 142.54633821820087 nsec\nrounds: 68494"
          }
        ]
      }
    ]
  }
}