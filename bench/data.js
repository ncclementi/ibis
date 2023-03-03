window.BENCHMARK_DATA = {
  "lastUpdate": 1677854826125,
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
          "id": "713cd33a8dad1be7846384698f490ff0a14c3d0b",
          "message": "feat(backends): implement `ops.Time` for sqlalchemy backends",
          "timestamp": "2023-03-03T15:41:52+01:00",
          "tree_id": "75a2dd6a8eb6961e57295532bcfd226c89de4140",
          "url": "https://github.com/ibis-project/ibis/commit/713cd33a8dad1be7846384698f490ff0a14c3d0b"
        },
        "date": 1677854749508,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 279.04762651714327,
            "unit": "iter/sec",
            "range": "stddev: 0.004906876445494975",
            "extra": "mean: 3.5836176515142837 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5234.613047394539,
            "unit": "iter/sec",
            "range": "stddev: 0.000041057609334434075",
            "extra": "mean: 191.0360882353543 usec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 314.90554376738163,
            "unit": "iter/sec",
            "range": "stddev: 0.0001707678308080121",
            "extra": "mean: 3.1755553999985864 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.15441182531225,
            "unit": "iter/sec",
            "range": "stddev: 0.000060157271316235314",
            "extra": "mean: 5.0465694444470595 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12214.067794010696,
            "unit": "iter/sec",
            "range": "stddev: 0.000014087860749046175",
            "extra": "mean: 81.87280575684711 usec\nrounds: 4412"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7046492.654223946,
            "unit": "iter/sec",
            "range": "stddev: 3.411706302277696e-9",
            "extra": "mean: 141.91457354333005 nsec\nrounds: 59877"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145148.95764898474,
            "unit": "iter/sec",
            "range": "stddev: 3.3334424160124577e-7",
            "extra": "mean: 6.889474207719152 usec\nrounds: 30959"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 165.36869923030838,
            "unit": "iter/sec",
            "range": "stddev: 0.00004991219896393326",
            "extra": "mean: 6.047093583334678 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 337.75636387193646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000118563962461203",
            "extra": "mean: 2.960714014493475 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 121.13380857196702,
            "unit": "iter/sec",
            "range": "stddev: 0.00007189540811372614",
            "extra": "mean: 8.255333599998949 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 185.2763986841976,
            "unit": "iter/sec",
            "range": "stddev: 0.003145574412107774",
            "extra": "mean: 5.39734152380894 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5610.207312759173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000498162627169613",
            "extra": "mean: 178.24653248120111 usec\nrounds: 1955"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.933494140540944,
            "unit": "iter/sec",
            "range": "stddev: 0.02356170692795714",
            "extra": "mean: 30.364224206899618 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 155.6840737962461,
            "unit": "iter/sec",
            "range": "stddev: 0.00018032880469999988",
            "extra": "mean: 6.423264600005041 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5262.910265149297,
            "unit": "iter/sec",
            "range": "stddev: 0.00006516700029369677",
            "extra": "mean: 190.0089398487269 usec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1983592.4316204495,
            "unit": "iter/sec",
            "range": "stddev: 9.226601994722999e-8",
            "extra": "mean: 504.1358214817715 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 599.1313094922558,
            "unit": "iter/sec",
            "range": "stddev: 0.004523377607126908",
            "extra": "mean: 1.6690831945462297 msec\nrounds: 550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 110.41013108401573,
            "unit": "iter/sec",
            "range": "stddev: 0.0005715862904460042",
            "extra": "mean: 9.057139867346574 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5609708.5014527,
            "unit": "iter/sec",
            "range": "stddev: 9.690265440684471e-9",
            "extra": "mean: 178.26238203649498 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 145.15714452454316,
            "unit": "iter/sec",
            "range": "stddev: 0.0004977402029914085",
            "extra": "mean: 6.889085640775471 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1779.31715029987,
            "unit": "iter/sec",
            "range": "stddev: 0.000005827676963113114",
            "extra": "mean: 562.0133542980064 usec\nrounds: 1431"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.595094727965757,
            "unit": "iter/sec",
            "range": "stddev: 0.0003853133223202242",
            "extra": "mean: 94.3832996000026 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6943903207695532,
            "unit": "iter/sec",
            "range": "stddev: 0.003966397251628964",
            "extra": "mean: 1.4401122395999948 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 142.9037244437878,
            "unit": "iter/sec",
            "range": "stddev: 0.0005418794958360233",
            "extra": "mean: 6.997718246268361 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5253.386266534185,
            "unit": "iter/sec",
            "range": "stddev: 0.000058839365164143136",
            "extra": "mean: 190.35341192600515 usec\nrounds: 2918"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.9093149660947,
            "unit": "iter/sec",
            "range": "stddev: 0.00002788070468693945",
            "extra": "mean: 1.859049419999413 msec\nrounds: 450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.48172019698382,
            "unit": "iter/sec",
            "range": "stddev: 0.00009772191962551213",
            "extra": "mean: 15.271437540000079 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.437035067437265,
            "unit": "iter/sec",
            "range": "stddev: 0.0002138494064226487",
            "extra": "mean: 16.824526978261954 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5125.211108943644,
            "unit": "iter/sec",
            "range": "stddev: 0.00005156970264367585",
            "extra": "mean: 195.11391408930854 usec\nrounds: 2328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 108.92697601095945,
            "unit": "iter/sec",
            "range": "stddev: 0.000624865928105291",
            "extra": "mean: 9.180462330097065 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 133.6021161783452,
            "unit": "iter/sec",
            "range": "stddev: 0.0005384417304089416",
            "extra": "mean: 7.484911381681275 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8218893932285869,
            "unit": "iter/sec",
            "range": "stddev: 0.0018891584307484843",
            "extra": "mean: 1.216708730199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 96.18641512064337,
            "unit": "iter/sec",
            "range": "stddev: 0.00016921465516981328",
            "extra": "mean: 10.396478533332735 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8912013113501089,
            "unit": "iter/sec",
            "range": "stddev: 0.006305050615735672",
            "extra": "mean: 1.1220809342000053 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 143.23519275516108,
            "unit": "iter/sec",
            "range": "stddev: 0.0005430219699392922",
            "extra": "mean: 6.981524447761584 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 142.1835171125714,
            "unit": "iter/sec",
            "range": "stddev: 0.0005655850193472461",
            "extra": "mean: 7.033164042554011 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 756115.9724707728,
            "unit": "iter/sec",
            "range": "stddev: 8.436836569785556e-7",
            "extra": "mean: 1.3225484401979808 usec\nrounds: 24876"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5317.455779621664,
            "unit": "iter/sec",
            "range": "stddev: 0.00006567671919629869",
            "extra": "mean: 188.0598619799241 usec\nrounds: 3485"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8928564402110076,
            "unit": "iter/sec",
            "range": "stddev: 0.006064192825798448",
            "extra": "mean: 1.1200008814000058 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.610379279131566,
            "unit": "iter/sec",
            "range": "stddev: 0.00013326738743076264",
            "extra": "mean: 64.05994256249947 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.15223611058718,
            "unit": "iter/sec",
            "range": "stddev: 0.000329700678941142",
            "extra": "mean: 7.344719620967284 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.69123153461435,
            "unit": "iter/sec",
            "range": "stddev: 0.015699979618592142",
            "extra": "mean: 10.906168269999625 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.01774263200538,
            "unit": "iter/sec",
            "range": "stddev: 0.00005691569542648399",
            "extra": "mean: 9.613744489128228 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.76720811216452,
            "unit": "iter/sec",
            "range": "stddev: 0.00006945104434693385",
            "extra": "mean: 13.026395313724326 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 321.51785930151567,
            "unit": "iter/sec",
            "range": "stddev: 0.00018328157269744755",
            "extra": "mean: 3.110247132686373 msec\nrounds: 309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 316.3804202592419,
            "unit": "iter/sec",
            "range": "stddev: 0.00018536390327648716",
            "extra": "mean: 3.160751854304387 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.83255234555878,
            "unit": "iter/sec",
            "range": "stddev: 0.0005984116585031297",
            "extra": "mean: 9.630891058826725 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12045295.19083485,
            "unit": "iter/sec",
            "range": "stddev: 3.189522313391919e-9",
            "extra": "mean: 83.01996623212277 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.726000061911608,
            "unit": "iter/sec",
            "range": "stddev: 0.0019887063433602736",
            "extra": "mean: 579.3742550000047 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5256.451798853228,
            "unit": "iter/sec",
            "range": "stddev: 0.00002139298860354457",
            "extra": "mean: 190.24239891596923 usec\nrounds: 2399"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5318.971572828193,
            "unit": "iter/sec",
            "range": "stddev: 0.00006368693157117926",
            "extra": "mean: 188.0062689389938 usec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 249.0853059682377,
            "unit": "iter/sec",
            "range": "stddev: 0.00347283330425437",
            "extra": "mean: 4.014688847713545 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.52254488910839,
            "unit": "iter/sec",
            "range": "stddev: 0.00024083668738726015",
            "extra": "mean: 14.593737019229554 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 142.93381115157788,
            "unit": "iter/sec",
            "range": "stddev: 0.0005500798693570177",
            "extra": "mean: 6.996245268654622 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5600.415798514822,
            "unit": "iter/sec",
            "range": "stddev: 0.00005265856639953331",
            "extra": "mean: 178.55817067461146 usec\nrounds: 2994"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73986.56427679071,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017878007240945494",
            "extra": "mean: 13.515967524304896 usec\nrounds: 13333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4684814305934246,
            "unit": "iter/sec",
            "range": "stddev: 0.002796986954664113",
            "extra": "mean: 405.1073618000032 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8402.865468486021,
            "unit": "iter/sec",
            "range": "stddev: 0.000011920265977076399",
            "extra": "mean: 119.00702251516282 usec\nrounds: 3642"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.23883943671771,
            "unit": "iter/sec",
            "range": "stddev: 0.016913383927074557",
            "extra": "mean: 12.309383134146886 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.6476431220427035,
            "unit": "iter/sec",
            "range": "stddev: 0.0003651368575822694",
            "extra": "mean: 177.06501249999462 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.23760672028297,
            "unit": "iter/sec",
            "range": "stddev: 0.0006845592679887285",
            "extra": "mean: 10.6114749175264 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12636.619340964557,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013324725961207084",
            "extra": "mean: 79.13508930021072 usec\nrounds: 7402"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1973690.1770539896,
            "unit": "iter/sec",
            "range": "stddev: 9.9445412499163e-8",
            "extra": "mean: 506.6651349973484 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 134.31636670856508,
            "unit": "iter/sec",
            "range": "stddev: 0.0005956939835918343",
            "extra": "mean: 7.445109069766343 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.378740674057575,
            "unit": "iter/sec",
            "range": "stddev: 0.000342714383924023",
            "extra": "mean: 21.561603128205686 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 144.01121158589297,
            "unit": "iter/sec",
            "range": "stddev: 0.0005351446515144848",
            "extra": "mean: 6.9439038043476735 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 297.7462423876804,
            "unit": "iter/sec",
            "range": "stddev: 0.00013278798509626933",
            "extra": "mean: 3.35856463537817 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 505019.27785921836,
            "unit": "iter/sec",
            "range": "stddev: 4.117796880411683e-7",
            "extra": "mean: 1.980122430650588 usec\nrounds: 2189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6110339.147221916,
            "unit": "iter/sec",
            "range": "stddev: 6.795719480559531e-9",
            "extra": "mean: 163.65703701635084 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 285.24362941121035,
            "unit": "iter/sec",
            "range": "stddev: 0.00031310616825752635",
            "extra": "mean: 3.5057750529404075 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.244730599392216,
            "unit": "iter/sec",
            "range": "stddev: 0.0007600058588491369",
            "extra": "mean: 38.10288683333477 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 109.66683156862442,
            "unit": "iter/sec",
            "range": "stddev: 0.0005288242133080106",
            "extra": "mean: 9.118527322221817 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 319.3743855845608,
            "unit": "iter/sec",
            "range": "stddev: 0.00020338504934603143",
            "extra": "mean: 3.1311214835518797 msec\nrounds: 304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 105.11228774682179,
            "unit": "iter/sec",
            "range": "stddev: 0.0005658585856024287",
            "extra": "mean: 9.513635574259835 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 293.91528202917215,
            "unit": "iter/sec",
            "range": "stddev: 0.000020041975524415042",
            "extra": "mean: 3.4023409504128694 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 104.89166140788437,
            "unit": "iter/sec",
            "range": "stddev: 0.0005773349585831123",
            "extra": "mean: 9.533646303030464 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2727472.61173454,
            "unit": "iter/sec",
            "range": "stddev: 1.2268385563965408e-8",
            "extra": "mean: 366.63979528040505 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16943251336586215,
            "unit": "iter/sec",
            "range": "stddev: 0.11747085401027149",
            "extra": "mean: 5.902054925199991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 303.1628520151796,
            "unit": "iter/sec",
            "range": "stddev: 0.00018345582639808523",
            "extra": "mean: 3.2985571726641796 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1843686.5025545151,
            "unit": "iter/sec",
            "range": "stddev: 9.36744617446105e-8",
            "extra": "mean: 542.3915609375306 nsec\nrounds: 156226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 132.99337295069134,
            "unit": "iter/sec",
            "range": "stddev: 0.0001651926322364621",
            "extra": "mean: 7.519171653543673 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 194.34094333638188,
            "unit": "iter/sec",
            "range": "stddev: 0.00005228741429366977",
            "extra": "mean: 5.14559609947511 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.27273434985693,
            "unit": "iter/sec",
            "range": "stddev: 0.023317899052792326",
            "extra": "mean: 27.568916926825075 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1174.5782080506985,
            "unit": "iter/sec",
            "range": "stddev: 0.000044445700734421354",
            "extra": "mean: 851.3694474713402 usec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 757.3569296395704,
            "unit": "iter/sec",
            "range": "stddev: 0.000009574670765211731",
            "extra": "mean: 1.3203813959633333 msec\nrounds: 644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.08693787032057,
            "unit": "iter/sec",
            "range": "stddev: 0.000124900508466909",
            "extra": "mean: 20.372018369567723 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14011.161566788105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016982562742883428",
            "extra": "mean: 71.37167002416048 usec\nrounds: 7446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 260.1700260200868,
            "unit": "iter/sec",
            "range": "stddev: 0.010007196573008893",
            "extra": "mean: 3.8436403120580596 msec\nrounds: 282"
          }
        ]
      }
    ]
  }
}