window.BENCHMARK_DATA = {
  "lastUpdate": 1677587362346,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "5f7c15cfb9afe3b451dc9e8720d92e71be97fa12",
          "message": "feat(examples): add movielens small dataset",
          "timestamp": "2023-02-28T07:21:12-05:00",
          "tree_id": "6fa08b874a129d3ee0ba294c7b3ce8ced9d27d68",
          "url": "https://github.com/ibis-project/ibis/commit/5f7c15cfb9afe3b451dc9e8720d92e71be97fa12"
        },
        "date": 1677587284896,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 84.56815309322361,
            "unit": "iter/sec",
            "range": "stddev: 0.010293876146060529",
            "extra": "mean: 11.824782301886753 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 105.33924609540513,
            "unit": "iter/sec",
            "range": "stddev: 0.0003311475669385906",
            "extra": "mean: 9.493138000003398 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5630.961557851024,
            "unit": "iter/sec",
            "range": "stddev: 0.000058471516040399705",
            "extra": "mean: 177.5895625864716 usec\nrounds: 2165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 141.0571995627686,
            "unit": "iter/sec",
            "range": "stddev: 0.0006159874795567892",
            "extra": "mean: 7.089322651375999 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 291.7544704865987,
            "unit": "iter/sec",
            "range": "stddev: 0.00003445639251535678",
            "extra": "mean: 3.4275395963330526 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.97309400983946,
            "unit": "iter/sec",
            "range": "stddev: 0.00007506251696614653",
            "extra": "mean: 10.206883942029735 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 314.9782426482304,
            "unit": "iter/sec",
            "range": "stddev: 0.00023998293274030353",
            "extra": "mean: 3.1748224626321453 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 539.3380974516223,
            "unit": "iter/sec",
            "range": "stddev: 0.00006232105441208562",
            "extra": "mean: 1.8541245365847687 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 104.63879301765465,
            "unit": "iter/sec",
            "range": "stddev: 0.0005395274369407039",
            "extra": "mean: 9.55668515625252 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 106.42752146634821,
            "unit": "iter/sec",
            "range": "stddev: 0.0006956651199785767",
            "extra": "mean: 9.396065850468899 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 690.2014255913111,
            "unit": "iter/sec",
            "range": "stddev: 0.00005599245429277652",
            "extra": "mean: 1.4488524116612442 msec\nrounds: 566"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 197.06609567357654,
            "unit": "iter/sec",
            "range": "stddev: 0.00004287875670698434",
            "extra": "mean: 5.074439601505152 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.799108805936,
            "unit": "iter/sec",
            "range": "stddev: 0.00009968676347197308",
            "extra": "mean: 7.204657209998118 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8872016834887648,
            "unit": "iter/sec",
            "range": "stddev: 0.01056398226031734",
            "extra": "mean: 1.127139430199992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 296.88369837920345,
            "unit": "iter/sec",
            "range": "stddev: 0.00005442066215709071",
            "extra": "mean: 3.3683223614478166 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5338.0703566153325,
            "unit": "iter/sec",
            "range": "stddev: 0.00005028230279907177",
            "extra": "mean: 187.33361180987916 usec\nrounds: 2066"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 315.7885821403361,
            "unit": "iter/sec",
            "range": "stddev: 0.00019247626725693183",
            "extra": "mean: 3.1666756068957587 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 41.644760609322184,
            "unit": "iter/sec",
            "range": "stddev: 0.000545147899942688",
            "extra": "mean: 24.01262452631676 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 228.41535228158398,
            "unit": "iter/sec",
            "range": "stddev: 0.014073950288962491",
            "extra": "mean: 4.377989439025221 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6154541.071102175,
            "unit": "iter/sec",
            "range": "stddev: 7.689672137377714e-9",
            "extra": "mean: 162.48165191294405 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1780.7847667063163,
            "unit": "iter/sec",
            "range": "stddev: 0.00006130203726660654",
            "extra": "mean: 561.5501764705505 usec\nrounds: 1241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8446.968745855971,
            "unit": "iter/sec",
            "range": "stddev: 0.00001204703476806248",
            "extra": "mean: 118.38566355422988 usec\nrounds: 3320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.759069870593215,
            "unit": "iter/sec",
            "range": "stddev: 0.0003197457201157506",
            "extra": "mean: 173.63915050000855 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 75125.15108469824,
            "unit": "iter/sec",
            "range": "stddev: 4.1641647580247837e-7",
            "extra": "mean: 13.311121316382732 usec\nrounds: 13947"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 109.0842713029001,
            "unit": "iter/sec",
            "range": "stddev: 0.0006408746942133827",
            "extra": "mean: 9.167224459182084 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1163.0817574020703,
            "unit": "iter/sec",
            "range": "stddev: 0.000010234333878314743",
            "extra": "mean: 859.7847860959151 usec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 477934.2613657177,
            "unit": "iter/sec",
            "range": "stddev: 2.504313726846561e-7",
            "extra": "mean: 2.092337965356275 usec\nrounds: 2015"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 773662.8167484935,
            "unit": "iter/sec",
            "range": "stddev: 2.449903701581416e-7",
            "extra": "mean: 1.292552748240821 usec\nrounds: 25252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 299.1656738049761,
            "unit": "iter/sec",
            "range": "stddev: 0.00023779381911622535",
            "extra": "mean: 3.342629477778566 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.499996656974393,
            "unit": "iter/sec",
            "range": "stddev: 0.0006814467332017732",
            "extra": "mean: 40.81633210000177 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13815.421417210046,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014794794556776343",
            "extra": "mean: 72.38288068102558 usec\nrounds: 6227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 306.06764130455394,
            "unit": "iter/sec",
            "range": "stddev: 0.0002460039305098883",
            "extra": "mean: 3.267251630187674 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6842472038746079,
            "unit": "iter/sec",
            "range": "stddev: 0.07221208077009396",
            "extra": "mean: 1.4614601189999974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1731194.6191938724,
            "unit": "iter/sec",
            "range": "stddev: 1.4465625157192263e-7",
            "extra": "mean: 577.6358064615797 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 337.9806712098891,
            "unit": "iter/sec",
            "range": "stddev: 0.000014274113967108538",
            "extra": "mean: 2.958749079999876 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.95756774779202,
            "unit": "iter/sec",
            "range": "stddev: 0.001426263820527455",
            "extra": "mean: 25.668953628571344 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.932149008207832,
            "unit": "iter/sec",
            "range": "stddev: 0.0005591868480789601",
            "extra": "mean: 62.76617168749965 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.42909386325354,
            "unit": "iter/sec",
            "range": "stddev: 0.00008768799031370787",
            "extra": "mean: 6.118861558620234 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2738093.5597946653,
            "unit": "iter/sec",
            "range": "stddev: 1.8387198986301107e-8",
            "extra": "mean: 365.2176151622752 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.97489238135033,
            "unit": "iter/sec",
            "range": "stddev: 0.0008404197850027517",
            "extra": "mean: 26.333188517240018 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 162.11979892952905,
            "unit": "iter/sec",
            "range": "stddev: 0.00008571193045306378",
            "extra": "mean: 6.168278067225363 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 140.75662141031322,
            "unit": "iter/sec",
            "range": "stddev: 0.0007364638517321978",
            "extra": "mean: 7.104461516484866 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.33970112435834,
            "unit": "iter/sec",
            "range": "stddev: 0.0008476884914712534",
            "extra": "mean: 9.867800959594865 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146662.42862026382,
            "unit": "iter/sec",
            "range": "stddev: 3.4084826796744254e-7",
            "extra": "mean: 6.818378840494898 usec\nrounds: 39840"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 280.81668340335324,
            "unit": "iter/sec",
            "range": "stddev: 0.00035924810172298957",
            "extra": "mean: 3.56104198611178 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.68148170588837,
            "unit": "iter/sec",
            "range": "stddev: 0.00006946766723687459",
            "extra": "mean: 13.040958230769425 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5359037963590265,
            "unit": "iter/sec",
            "range": "stddev: 0.001830580567397356",
            "extra": "mean: 394.33672579999666 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1971947.2363351309,
            "unit": "iter/sec",
            "range": "stddev: 9.245617071744621e-8",
            "extra": "mean: 507.1129600092661 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5168.81123652592,
            "unit": "iter/sec",
            "range": "stddev: 0.00008396887370391256",
            "extra": "mean: 193.46808274471317 usec\nrounds: 1982"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11364982.808249349,
            "unit": "iter/sec",
            "range": "stddev: 3.838926362932927e-9",
            "extra": "mean: 87.98957436829633 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 133.06961195656604,
            "unit": "iter/sec",
            "range": "stddev: 0.0007231034030191894",
            "extra": "mean: 7.514863726561405 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2711276.6292991415,
            "unit": "iter/sec",
            "range": "stddev: 1.8086503789932946e-8",
            "extra": "mean: 368.82994128807246 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.48841528998572,
            "unit": "iter/sec",
            "range": "stddev: 0.000738075304412718",
            "extra": "mean: 9.303328152174982 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5287.738114974199,
            "unit": "iter/sec",
            "range": "stddev: 0.00006416423009659628",
            "extra": "mean: 189.11677890554523 usec\nrounds: 2759"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.797626436195976,
            "unit": "iter/sec",
            "range": "stddev: 0.0005934083436444831",
            "extra": "mean: 18.588180673472664 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5768.536410886219,
            "unit": "iter/sec",
            "range": "stddev: 0.00004764605839210861",
            "extra": "mean: 173.35419745515142 usec\nrounds: 1965"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7622934206300873,
            "unit": "iter/sec",
            "range": "stddev: 0.0011770498442128042",
            "extra": "mean: 567.4423954000019 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1669365893259508,
            "unit": "iter/sec",
            "range": "stddev: 0.014779836539404139",
            "extra": "mean: 5.9902984962 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5644.709155226532,
            "unit": "iter/sec",
            "range": "stddev: 0.00005043355718282468",
            "extra": "mean: 177.1570460940548 usec\nrounds: 2061"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 140.22792120980156,
            "unit": "iter/sec",
            "range": "stddev: 0.0007190673921143844",
            "extra": "mean: 7.131247410448688 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.03921746334428,
            "unit": "iter/sec",
            "range": "stddev: 0.00018697391808370392",
            "extra": "mean: 15.863141076925249 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5397.5695320738805,
            "unit": "iter/sec",
            "range": "stddev: 0.00006457617589061825",
            "extra": "mean: 185.26857209670354 usec\nrounds: 2351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 140.38498041380927,
            "unit": "iter/sec",
            "range": "stddev: 0.0007665097025282538",
            "extra": "mean: 7.123269149251758 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 140.19393912377086,
            "unit": "iter/sec",
            "range": "stddev: 0.0007783495758690131",
            "extra": "mean: 7.132975977778507 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 300.09183810546824,
            "unit": "iter/sec",
            "range": "stddev: 0.00033887580973429197",
            "extra": "mean: 3.332313222222815 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8542910366872937,
            "unit": "iter/sec",
            "range": "stddev: 0.01593657098040662",
            "extra": "mean: 1.1705612689999954 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 121.33767983750455,
            "unit": "iter/sec",
            "range": "stddev: 0.00009579060616306115",
            "extra": "mean: 8.241463009175718 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5277.626590445023,
            "unit": "iter/sec",
            "range": "stddev: 0.000022557031527759815",
            "extra": "mean: 189.47911203313788 usec\nrounds: 2169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.644127714619284,
            "unit": "iter/sec",
            "range": "stddev: 0.0003491133563327348",
            "extra": "mean: 93.94851572727187 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12152.466781606872,
            "unit": "iter/sec",
            "range": "stddev: 0.000013237124386112926",
            "extra": "mean: 82.2878200756352 usec\nrounds: 4513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 201.23064011563977,
            "unit": "iter/sec",
            "range": "stddev: 0.000018931342611898073",
            "extra": "mean: 4.9694221487609305 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.768090560827844,
            "unit": "iter/sec",
            "range": "stddev: 0.0010477929426338283",
            "extra": "mean: 17.615529959185174 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.99122239239992,
            "unit": "iter/sec",
            "range": "stddev: 0.0002656841177319026",
            "extra": "mean: 10.310211329786874 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7019658.523869154,
            "unit": "iter/sec",
            "range": "stddev: 4.720308819748954e-9",
            "extra": "mean: 142.45707203557603 nsec\nrounds: 68966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.14891022362265,
            "unit": "iter/sec",
            "range": "stddev: 0.00031281312081821497",
            "extra": "mean: 11.092757500000923 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.02001413413073,
            "unit": "iter/sec",
            "range": "stddev: 0.0006206202623872892",
            "extra": "mean: 22.212343093021744 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8434600190516898,
            "unit": "iter/sec",
            "range": "stddev: 0.003414206259072306",
            "extra": "mean: 1.1855926509999961 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12523.287950374337,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016376219358392454",
            "extra": "mean: 79.85123427351272 usec\nrounds: 4785"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 135.94338256371668,
            "unit": "iter/sec",
            "range": "stddev: 0.000049905809967219256",
            "extra": "mean: 7.356003515149403 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 739.7514279374835,
            "unit": "iter/sec",
            "range": "stddev: 0.000034392605485671094",
            "extra": "mean: 1.3518054338713763 msec\nrounds: 620"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5591502.229679638,
            "unit": "iter/sec",
            "range": "stddev: 1.0720831542064658e-8",
            "extra": "mean: 178.84281520855137 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 131.40682172232772,
            "unit": "iter/sec",
            "range": "stddev: 0.0007210431936897064",
            "extra": "mean: 7.609955000000483 msec\nrounds: 123"
          }
        ]
      }
    ]
  }
}