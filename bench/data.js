window.BENCHMARK_DATA = {
  "lastUpdate": 1679685912001,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "nicholas.b.crews@gmail.com",
            "name": "Nick Crews",
            "username": "NickCrews"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "383c708ed0aa4dab61482157c371d32a28ac733d",
          "message": "docs(blog): add campaign finance blog post\n\nSee https://github.com/ibis-project/ibis/pull/5727\nfor a narrative, and for instructions on how to install the\nrequired dependencies to run this.",
          "timestamp": "2023-03-24T15:20:12-04:00",
          "tree_id": "e382f06fb5ca10051ed8ae5215aa25bb57793a89",
          "url": "https://github.com/ibis-project/ibis/commit/383c708ed0aa4dab61482157c371d32a28ac733d"
        },
        "date": 1679685833873,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.684665908905181,
            "unit": "iter/sec",
            "range": "stddev: 0.034624846991387036",
            "extra": "mean: 1.4605663682000114 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 298.925601602666,
            "unit": "iter/sec",
            "range": "stddev: 0.0001854253159010042",
            "extra": "mean: 3.3453140000005988 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 287.39578235982617,
            "unit": "iter/sec",
            "range": "stddev: 0.00022659260043313714",
            "extra": "mean: 3.4795221829246503 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 164.4720587989938,
            "unit": "iter/sec",
            "range": "stddev: 0.00009912125643603296",
            "extra": "mean: 6.080060086206678 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 307.7479824285184,
            "unit": "iter/sec",
            "range": "stddev: 0.00018289069039216968",
            "extra": "mean: 3.249412041985598 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1789.3384690021303,
            "unit": "iter/sec",
            "range": "stddev: 0.000008832393222692381",
            "extra": "mean: 558.8657581132067 usec\nrounds: 339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5555.761927156886,
            "unit": "iter/sec",
            "range": "stddev: 0.00006274843217894289",
            "extra": "mean: 179.99331380848813 usec\nrounds: 478"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2751428.6091951854,
            "unit": "iter/sec",
            "range": "stddev: 1.3085401607814772e-8",
            "extra": "mean: 363.4475547202711 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 237.52408446472123,
            "unit": "iter/sec",
            "range": "stddev: 0.0033858814480458668",
            "extra": "mean: 4.210099376884566 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 513.0828804759439,
            "unit": "iter/sec",
            "range": "stddev: 0.00008024892128300956",
            "extra": "mean: 1.9490028571453877 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6960953.240560587,
            "unit": "iter/sec",
            "range": "stddev: 4.1920925971914134e-9",
            "extra": "mean: 143.65848547483563 nsec\nrounds: 57140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13938.437677093645,
            "unit": "iter/sec",
            "range": "stddev: 0.000001650559337565844",
            "extra": "mean: 71.74405217906127 usec\nrounds: 1744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.40614775002206,
            "unit": "iter/sec",
            "range": "stddev: 0.0010329781056468649",
            "extra": "mean: 23.581486483866712 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.93210003708788,
            "unit": "iter/sec",
            "range": "stddev: 0.00022512972103251743",
            "extra": "mean: 10.997216599992043 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.03580266461563,
            "unit": "iter/sec",
            "range": "stddev: 0.0006034747905834004",
            "extra": "mean: 8.330847778758443 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 312.4053609108006,
            "unit": "iter/sec",
            "range": "stddev: 0.00023922300406158448",
            "extra": "mean: 3.200969397850777 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.80139129579088,
            "unit": "iter/sec",
            "range": "stddev: 0.0001400176503102947",
            "extra": "mean: 10.43826176712254 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.71624244878723,
            "unit": "iter/sec",
            "range": "stddev: 0.00206436877715792",
            "extra": "mean: 582.6682591999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12649.98607418783,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017465229275743336",
            "extra": "mean: 79.0514704233936 usec\nrounds: 5731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 434823.86785774655,
            "unit": "iter/sec",
            "range": "stddev: 0.000014155343869350703",
            "extra": "mean: 2.299781759742664 usec\nrounds: 2204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8476.800264149335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000114824672081768",
            "extra": "mean: 117.96904124652654 usec\nrounds: 3467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.03420632860104,
            "unit": "iter/sec",
            "range": "stddev: 0.0005218779888188006",
            "extra": "mean: 20.81849740909676 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6138726.084493013,
            "unit": "iter/sec",
            "range": "stddev: 8.891537715160837e-9",
            "extra": "mean: 162.9002477443952 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8729875164136325,
            "unit": "iter/sec",
            "range": "stddev: 0.0045397758121881885",
            "extra": "mean: 1.1454917524000279 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 106.06484370717075,
            "unit": "iter/sec",
            "range": "stddev: 0.0006221070565695941",
            "extra": "mean: 9.42819472549124 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.94365381534976,
            "unit": "iter/sec",
            "range": "stddev: 0.0006486350840696506",
            "extra": "mean: 10.644678585373551 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.29166205079625,
            "unit": "iter/sec",
            "range": "stddev: 0.0005937742822710395",
            "extra": "mean: 8.313128133334164 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 259.774476878801,
            "unit": "iter/sec",
            "range": "stddev: 0.009211025155702653",
            "extra": "mean: 3.8494928832694937 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.11685326100206,
            "unit": "iter/sec",
            "range": "stddev: 0.00019142859751006933",
            "extra": "mean: 15.59652336538219 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 764.6622583436125,
            "unit": "iter/sec",
            "range": "stddev: 0.000011119111899038671",
            "extra": "mean: 1.307766911585474 msec\nrounds: 656"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 44.32486891723286,
            "unit": "iter/sec",
            "range": "stddev: 0.0007361135775657909",
            "extra": "mean: 22.56069841666728 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.487848130684167,
            "unit": "iter/sec",
            "range": "stddev: 0.002861824225555093",
            "extra": "mean: 401.95379599999796 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5220.043106304238,
            "unit": "iter/sec",
            "range": "stddev: 0.00005413556428803288",
            "extra": "mean: 191.5692992635064 usec\nrounds: 2309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 104.22348529386863,
            "unit": "iter/sec",
            "range": "stddev: 0.0005376356109623917",
            "extra": "mean: 9.594766450003078 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 165.84839549915858,
            "unit": "iter/sec",
            "range": "stddev: 0.003919261477872684",
            "extra": "mean: 6.029603102220386 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.01353135668533,
            "unit": "iter/sec",
            "range": "stddev: 0.0005715558748869891",
            "extra": "mean: 8.263538703391086 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 309.3493091708479,
            "unit": "iter/sec",
            "range": "stddev: 0.00021598913058488954",
            "extra": "mean: 3.232591670174762 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.40849856614257,
            "unit": "iter/sec",
            "range": "stddev: 0.0005912194329893154",
            "extra": "mean: 8.305061618642158 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147496.70318598414,
            "unit": "iter/sec",
            "range": "stddev: 3.6375434588268615e-7",
            "extra": "mean: 6.779812554447827 usec\nrounds: 40161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1927051.641969452,
            "unit": "iter/sec",
            "range": "stddev: 8.2857559705864e-8",
            "extra": "mean: 518.927452809722 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.496155279908274,
            "unit": "iter/sec",
            "range": "stddev: 0.0006587096897576571",
            "extra": "mean: 64.53213599998975 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.73873880898033,
            "unit": "iter/sec",
            "range": "stddev: 0.0005618812488607767",
            "extra": "mean: 9.196354592236762 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8182361187109887,
            "unit": "iter/sec",
            "range": "stddev: 0.0026659063152542424",
            "extra": "mean: 1.2221411119999857 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.89529522718846,
            "unit": "iter/sec",
            "range": "stddev: 0.0003502476057381254",
            "extra": "mean: 7.251879031496013 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.2567081630466,
            "unit": "iter/sec",
            "range": "stddev: 0.0006371880919217619",
            "extra": "mean: 8.315544432200644 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.45371651198,
            "unit": "iter/sec",
            "range": "stddev: 0.0006330502269154229",
            "extra": "mean: 9.220523114941276 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8686522225122763,
            "unit": "iter/sec",
            "range": "stddev: 0.005125469552751411",
            "extra": "mean: 1.1512087048000013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.33606058368817,
            "unit": "iter/sec",
            "range": "stddev: 0.0006641611556685013",
            "extra": "mean: 9.677163947914735 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.38427594560261,
            "unit": "iter/sec",
            "range": "stddev: 0.016105379710324295",
            "extra": "mean: 10.268598192983278 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 287.18599431758287,
            "unit": "iter/sec",
            "range": "stddev: 0.0001339618664560797",
            "extra": "mean: 3.48206395780623 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.239061921538934,
            "unit": "iter/sec",
            "range": "stddev: 0.000570961296580585",
            "extra": "mean: 17.781235423078975 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.2295289997053,
            "unit": "iter/sec",
            "range": "stddev: 0.0006170497243539308",
            "extra": "mean: 8.754303801800496 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.16370523157822,
            "unit": "iter/sec",
            "range": "stddev: 0.00024035022250586582",
            "extra": "mean: 15.34596592453128 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.626168257691173,
            "unit": "iter/sec",
            "range": "stddev: 0.0005746547595964083",
            "extra": "mean: 39.02261118182857 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.256617903911314,
            "unit": "iter/sec",
            "range": "stddev: 0.005153436227803329",
            "extra": "mean: 97.49802609090611 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5648.164977014065,
            "unit": "iter/sec",
            "range": "stddev: 0.000048301387232894266",
            "extra": "mean: 177.04865280487184 usec\nrounds: 2477"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.81310608918315,
            "unit": "iter/sec",
            "range": "stddev: 0.00005201742607926128",
            "extra": "mean: 6.067478635217779 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.7436986817465,
            "unit": "iter/sec",
            "range": "stddev: 0.00006369476041187156",
            "extra": "mean: 6.221083676691312 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1186.8086403701273,
            "unit": "iter/sec",
            "range": "stddev: 0.00001935391887700372",
            "extra": "mean: 842.5958204080249 usec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5580.995402953777,
            "unit": "iter/sec",
            "range": "stddev: 0.000021271801093393424",
            "extra": "mean: 179.17950612730192 usec\nrounds: 2448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1709099.1263711727,
            "unit": "iter/sec",
            "range": "stddev: 8.741319266736986e-8",
            "extra": "mean: 585.1035698106288 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 334.5931494647581,
            "unit": "iter/sec",
            "range": "stddev: 0.000011415226656111306",
            "extra": "mean: 2.988704346157953 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12087.971426913757,
            "unit": "iter/sec",
            "range": "stddev: 0.000012287935925409445",
            "extra": "mean: 82.72686662490857 usec\nrounds: 4881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 300.96552038438574,
            "unit": "iter/sec",
            "range": "stddev: 0.0001712115744036637",
            "extra": "mean: 3.322639745319745 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.07437723322732,
            "unit": "iter/sec",
            "range": "stddev: 0.0005967893091764242",
            "extra": "mean: 8.25938586554681 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71492.54340833245,
            "unit": "iter/sec",
            "range": "stddev: 5.120007271919873e-7",
            "extra": "mean: 13.987472711503086 usec\nrounds: 4544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.69695621142547,
            "unit": "iter/sec",
            "range": "stddev: 0.0006715009696086819",
            "extra": "mean: 9.737386938141267 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 308.78332230398746,
            "unit": "iter/sec",
            "range": "stddev: 0.00025639569134482305",
            "extra": "mean: 3.238516874999912 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5400.546054477058,
            "unit": "iter/sec",
            "range": "stddev: 0.00005396564314655406",
            "extra": "mean: 185.16646093055704 usec\nrounds: 3545"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.95409595050594,
            "unit": "iter/sec",
            "range": "stddev: 0.000024521258950587218",
            "extra": "mean: 5.182579799998166 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5742.912995526788,
            "unit": "iter/sec",
            "range": "stddev: 0.00004699606350496137",
            "extra": "mean: 174.1276597397366 usec\nrounds: 2454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5468.12472833867,
            "unit": "iter/sec",
            "range": "stddev: 0.00004861308552366031",
            "extra": "mean: 182.87805229048251 usec\nrounds: 3404"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.10122034154904,
            "unit": "iter/sec",
            "range": "stddev: 0.00008679501038195139",
            "extra": "mean: 3.435231218978402 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5638474.927642808,
            "unit": "iter/sec",
            "range": "stddev: 7.847450430702447e-9",
            "extra": "mean: 177.35292128317312 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.07868197164491,
            "unit": "iter/sec",
            "range": "stddev: 0.00029372774716228883",
            "extra": "mean: 8.327872887846466 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.43241023724609,
            "unit": "iter/sec",
            "range": "stddev: 0.00007872770820836398",
            "extra": "mean: 13.256901070174639 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5211.385199445355,
            "unit": "iter/sec",
            "range": "stddev: 0.00005116342407714387",
            "extra": "mean: 191.8875618916885 usec\nrounds: 2157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2716794.951692999,
            "unit": "iter/sec",
            "range": "stddev: 1.3873612641650926e-8",
            "extra": "mean: 368.08077818924653 nsec\nrounds: 121937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.786767310987,
            "unit": "iter/sec",
            "range": "stddev: 0.01751307145909121",
            "extra": "mean: 11.014821098041015 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 669.2260442267378,
            "unit": "iter/sec",
            "range": "stddev: 0.00011836753276775266",
            "extra": "mean: 1.4942634235872536 msec\nrounds: 602"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.56128940435897,
            "unit": "iter/sec",
            "range": "stddev: 0.000059935655006455434",
            "extra": "mean: 9.750267433333368 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 44.33019798695776,
            "unit": "iter/sec",
            "range": "stddev: 0.0004935428916117753",
            "extra": "mean: 22.557986325578938 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.610095522479664,
            "unit": "iter/sec",
            "range": "stddev: 0.0017273509640693323",
            "extra": "mean: 178.25008433332337 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5421.77851789764,
            "unit": "iter/sec",
            "range": "stddev: 0.000045979388822586746",
            "extra": "mean: 184.4413224736008 usec\nrounds: 2118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.89166100908439,
            "unit": "iter/sec",
            "range": "stddev: 0.00007320972478035158",
            "extra": "mean: 8.937216509090975 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12046232.824755352,
            "unit": "iter/sec",
            "range": "stddev: 2.9608632669349554e-9",
            "extra": "mean: 83.01350426703607 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1690816864554332,
            "unit": "iter/sec",
            "range": "stddev: 0.09120688618224099",
            "extra": "mean: 5.9143010752000125 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 799180.8844206913,
            "unit": "iter/sec",
            "range": "stddev: 3.865316229777311e-7",
            "extra": "mean: 1.251281179885675 usec\nrounds: 24038"
          }
        ]
      }
    ]
  }
}