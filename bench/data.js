window.BENCHMARK_DATA = {
  "lastUpdate": 1681222593630,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "d80aa1ee8f8bccb3c5b84cdf4091723bcf51bc97",
          "message": "feat(api): replace `suffixes` in `join` with `lname`/`rname`\n\nBREAKING CHANGE: the `suffixes` argument in all join methods has been removed in favor of `lname`/`rname` args. The default renaming scheme for duplicate columns has also changed. To get the exact same behavior as before, pass in `lname=\"{name}_x\", rname=\"{name}_y\"`.",
          "timestamp": "2023-04-11T16:04:53+02:00",
          "tree_id": "ab9a5c11f843684ff4061a26b903780de0a2427d",
          "url": "https://github.com/ibis-project/ibis/commit/d80aa1ee8f8bccb3c5b84cdf4091723bcf51bc97"
        },
        "date": 1681222369913,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1579.633772940655,
            "unit": "iter/sec",
            "range": "stddev: 0.00019355832740141976",
            "extra": "mean: 633.0581284916404 usec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4179081.5572778746,
            "unit": "iter/sec",
            "range": "stddev: 3.983127932667171e-7",
            "extra": "mean: 239.2870266575928 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.942302085021012,
            "unit": "iter/sec",
            "range": "stddev: 0.002012537277289308",
            "extra": "mean: 52.791893800002754 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 44.51113791125924,
            "unit": "iter/sec",
            "range": "stddev: 0.00220099771741825",
            "extra": "mean: 22.466287022220715 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 37.55004924319048,
            "unit": "iter/sec",
            "range": "stddev: 0.002416905596472271",
            "extra": "mean: 26.631123531251966 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10181246657248319,
            "unit": "iter/sec",
            "range": "stddev: 0.20192893620734925",
            "extra": "mean: 9.821979897599983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 186.93997826471988,
            "unit": "iter/sec",
            "range": "stddev: 0.0009296019459391841",
            "extra": "mean: 5.349310560975519 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 219.47254469102106,
            "unit": "iter/sec",
            "range": "stddev: 0.0004156814788437415",
            "extra": "mean: 4.556378573036664 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10062.00405147478,
            "unit": "iter/sec",
            "range": "stddev: 0.0000760190998190975",
            "extra": "mean: 99.38378029707022 usec\nrounds: 5116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7373.71304734221,
            "unit": "iter/sec",
            "range": "stddev: 0.000058802832301546284",
            "extra": "mean: 135.61688576428142 usec\nrounds: 3983"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1570.9324603180744,
            "unit": "iter/sec",
            "range": "stddev: 0.00015015085464738568",
            "extra": "mean: 636.56460430993 usec\nrounds: 1160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 64.35692556860606,
            "unit": "iter/sec",
            "range": "stddev: 0.0012127449053877229",
            "extra": "mean: 15.538343250004626 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 855.3508826654454,
            "unit": "iter/sec",
            "range": "stddev: 0.0002259407891520278",
            "extra": "mean: 1.169110852944699 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 122.24786031509936,
            "unit": "iter/sec",
            "range": "stddev: 0.000643040402364631",
            "extra": "mean: 8.180102272730622 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1367.0075699022796,
            "unit": "iter/sec",
            "range": "stddev: 0.00006467627502393172",
            "extra": "mean: 731.5248444977411 usec\nrounds: 418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.458899215565282,
            "unit": "iter/sec",
            "range": "stddev: 0.0024185135839093915",
            "extra": "mean: 31.787507666676984 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 181.06667207793237,
            "unit": "iter/sec",
            "range": "stddev: 0.0007467388918669387",
            "extra": "mean: 5.522827522723746 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 67.7820807949208,
            "unit": "iter/sec",
            "range": "stddev: 0.0017185081233267202",
            "extra": "mean: 14.753161724638796 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 74.82119642002381,
            "unit": "iter/sec",
            "range": "stddev: 0.0007448217005620911",
            "extra": "mean: 13.365196599988849 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1497.8756752656648,
            "unit": "iter/sec",
            "range": "stddev: 0.00017099547617547973",
            "extra": "mean: 667.6121500021281 usec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 61.29963022301822,
            "unit": "iter/sec",
            "range": "stddev: 0.018189427763400937",
            "extra": "mean: 16.31331210909159 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.34784045863099,
            "unit": "iter/sec",
            "range": "stddev: 0.0016765914560564312",
            "extra": "mean: 30.913964759993178 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 180.66574378087037,
            "unit": "iter/sec",
            "range": "stddev: 0.0005564119374419728",
            "extra": "mean: 5.5350836250003255 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 129.43722367805373,
            "unit": "iter/sec",
            "range": "stddev: 0.004344884284747828",
            "extra": "mean: 7.725752852110591 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4749786.011789921,
            "unit": "iter/sec",
            "range": "stddev: 4.1544125409773147e-7",
            "extra": "mean: 210.5358004587623 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5864895473989001,
            "unit": "iter/sec",
            "range": "stddev: 0.01611693319213605",
            "extra": "mean: 1.705060225599982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119782.91155243223,
            "unit": "iter/sec",
            "range": "stddev: 0.000005922292199085022",
            "extra": "mean: 8.348436242195305 usec\nrounds: 17637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.093463501073891,
            "unit": "iter/sec",
            "range": "stddev: 0.008287007363665574",
            "extra": "mean: 244.2919057999802 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 391.00301285420306,
            "unit": "iter/sec",
            "range": "stddev: 0.0005765866668294642",
            "extra": "mean: 2.5575250499997537 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 62.43478231731744,
            "unit": "iter/sec",
            "range": "stddev: 0.021343005213782754",
            "extra": "mean: 16.01671316667074 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.95498686570426,
            "unit": "iter/sec",
            "range": "stddev: 0.0029623563382368484",
            "extra": "mean: 34.53636517391932 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.38396580149372,
            "unit": "iter/sec",
            "range": "stddev: 0.0022280770774808153",
            "extra": "mean: 30.879479250002007 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.900946404672338,
            "unit": "iter/sec",
            "range": "stddev: 0.0020657196602687695",
            "extra": "mean: 84.02693080000745 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.532474898941041,
            "unit": "iter/sec",
            "range": "stddev: 0.035664788592595906",
            "extra": "mean: 1.8780227987999978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1535.1312310802384,
            "unit": "iter/sec",
            "range": "stddev: 0.00018015054676478955",
            "extra": "mean: 651.4101073276464 usec\nrounds: 969"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8388.36883515415,
            "unit": "iter/sec",
            "range": "stddev: 0.0000610641348259385",
            "extra": "mean: 119.21268838456163 usec\nrounds: 4451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 663205.1222394075,
            "unit": "iter/sec",
            "range": "stddev: 0.000002007472179449974",
            "extra": "mean: 1.5078291262639167 usec\nrounds: 20243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 70.49057241099112,
            "unit": "iter/sec",
            "range": "stddev: 0.0015454761525937333",
            "extra": "mean: 14.18629422058824 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3046.0889896219783,
            "unit": "iter/sec",
            "range": "stddev: 0.00014619357382777374",
            "extra": "mean: 328.28981799514025 usec\nrounds: 1956"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.49628017441476,
            "unit": "iter/sec",
            "range": "stddev: 0.001280638626589078",
            "extra": "mean: 11.696415305554494 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 65.90401350639647,
            "unit": "iter/sec",
            "range": "stddev: 0.002590016243419629",
            "extra": "mean: 15.173582712120297 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1470874.9094750334,
            "unit": "iter/sec",
            "range": "stddev: 0.00000653127083552882",
            "extra": "mean: 679.8674676943858 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.55550626806965,
            "unit": "iter/sec",
            "range": "stddev: 0.0004999554377759221",
            "extra": "mean: 12.729852400002528 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1453443.3418147985,
            "unit": "iter/sec",
            "range": "stddev: 9.095746982838711e-7",
            "extra": "mean: 688.0213154723871 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.71519957849258,
            "unit": "iter/sec",
            "range": "stddev: 0.0009931396742765904",
            "extra": "mean: 15.694842150938745 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5068872.267404429,
            "unit": "iter/sec",
            "range": "stddev: 0.000001186264900291292",
            "extra": "mean: 197.2825408188375 nsec\nrounds: 58821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58919.6795338392,
            "unit": "iter/sec",
            "range": "stddev: 0.000024129246776823462",
            "extra": "mean: 16.972257960528662 usec\nrounds: 10835"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 76.44834502565328,
            "unit": "iter/sec",
            "range": "stddev: 0.0013835474973540652",
            "extra": "mean: 13.080727904108798 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 72.62990396597259,
            "unit": "iter/sec",
            "range": "stddev: 0.0015315601725557238",
            "extra": "mean: 13.768433460527556 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 197.3811785456358,
            "unit": "iter/sec",
            "range": "stddev: 0.0007432138298709968",
            "extra": "mean: 5.0663391888137586 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 84.46994150859392,
            "unit": "iter/sec",
            "range": "stddev: 0.000712858079269949",
            "extra": "mean: 11.838530749997744 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2280426294082687,
            "unit": "iter/sec",
            "range": "stddev: 0.01808437679952582",
            "extra": "mean: 814.303979400006 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2205742.487264228,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014446953552348076",
            "extra": "mean: 453.3620791065782 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1190.5698548172802,
            "unit": "iter/sec",
            "range": "stddev: 0.006213452467748602",
            "extra": "mean: 839.9339156403154 usec\nrounds: 1055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1504.856452712962,
            "unit": "iter/sec",
            "range": "stddev: 0.00022319564410547033",
            "extra": "mean: 664.5152088740394 usec\nrounds: 924"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 91.08511663330103,
            "unit": "iter/sec",
            "range": "stddev: 0.0008927789601468196",
            "extra": "mean: 10.978742048779424 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 192.6818677204103,
            "unit": "iter/sec",
            "range": "stddev: 0.0007979671409700457",
            "extra": "mean: 5.1899019447488595 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 73.8425620456832,
            "unit": "iter/sec",
            "range": "stddev: 0.0011306676769199003",
            "extra": "mean: 13.542325351351478 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7975187486193565,
            "unit": "iter/sec",
            "range": "stddev: 0.016618407317777886",
            "extra": "mean: 556.322431000001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 73.41331406652515,
            "unit": "iter/sec",
            "range": "stddev: 0.0016162481107340268",
            "extra": "mean: 13.621507388888984 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 229.32398522265396,
            "unit": "iter/sec",
            "range": "stddev: 0.0003304689619491993",
            "extra": "mean: 4.360642865285485 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 87.13700691668403,
            "unit": "iter/sec",
            "range": "stddev: 0.001080592772301232",
            "extra": "mean: 11.476180275002434 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5982065712914767,
            "unit": "iter/sec",
            "range": "stddev: 0.030288002968613045",
            "extra": "mean: 1.6716633484000112 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9513298.53307879,
            "unit": "iter/sec",
            "range": "stddev: 1.4333053217221768e-7",
            "extra": "mean: 105.11601170956835 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 583.5943932660108,
            "unit": "iter/sec",
            "range": "stddev: 0.00018347573768997364",
            "extra": "mean: 1.7135188609397514 msec\nrounds: 489"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 190.62858221810788,
            "unit": "iter/sec",
            "range": "stddev: 0.0008759501181131327",
            "extra": "mean: 5.245803060402816 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 143.51765639767902,
            "unit": "iter/sec",
            "range": "stddev: 0.0008782217818010924",
            "extra": "mean: 6.967783791208648 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 70.92189223072907,
            "unit": "iter/sec",
            "range": "stddev: 0.0017477910440343047",
            "extra": "mean: 14.100018605633304 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 69.93936487865072,
            "unit": "iter/sec",
            "range": "stddev: 0.0019149992267701653",
            "extra": "mean: 14.298099528571129 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1632198.3661382522,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011777515465619424",
            "extra": "mean: 612.6706292238115 nsec\nrounds: 181786"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 124.08568221673286,
            "unit": "iter/sec",
            "range": "stddev: 0.00047436347506273264",
            "extra": "mean: 8.058947512198557 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5840.052629318321,
            "unit": "iter/sec",
            "range": "stddev: 0.00015284767154143076",
            "extra": "mean: 171.23133359788315 usec\nrounds: 2512"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.38918868364137,
            "unit": "iter/sec",
            "range": "stddev: 0.0036584755087168503",
            "extra": "mean: 119.2010381111067 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 122.99577675377311,
            "unit": "iter/sec",
            "range": "stddev: 0.0007120195545545569",
            "extra": "mean: 8.130360459464502 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5801844178066056,
            "unit": "iter/sec",
            "range": "stddev: 0.019199844448539175",
            "extra": "mean: 1.7235898954000048 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 396439.10991476907,
            "unit": "iter/sec",
            "range": "stddev: 0.000003681450910910424",
            "extra": "mean: 2.5224554666541126 usec\nrounds: 1875"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 166.86828717086027,
            "unit": "iter/sec",
            "range": "stddev: 0.004509817832133755",
            "extra": "mean: 5.992750431818583 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 96.70384071521241,
            "unit": "iter/sec",
            "range": "stddev: 0.0009990460264573087",
            "extra": "mean: 10.3408509176481 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 54.04356621618805,
            "unit": "iter/sec",
            "range": "stddev: 0.0012164893227687064",
            "extra": "mean: 18.50359015909026 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1592.3452731530472,
            "unit": "iter/sec",
            "range": "stddev: 0.00014691126004414673",
            "extra": "mean: 628.0045018250798 usec\nrounds: 1096"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 484.4128754338565,
            "unit": "iter/sec",
            "range": "stddev: 0.0004048480983799143",
            "extra": "mean: 2.0643547079634628 msec\nrounds: 452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 62.0454577665406,
            "unit": "iter/sec",
            "range": "stddev: 0.027921550428410408",
            "extra": "mean: 16.117215280491852 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 74.89198041229356,
            "unit": "iter/sec",
            "range": "stddev: 0.0013494496069802308",
            "extra": "mean: 13.352564513514313 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 70.76853767596938,
            "unit": "iter/sec",
            "range": "stddev: 0.0017358129126388742",
            "extra": "mean: 14.130573173332172 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 192.82082574320398,
            "unit": "iter/sec",
            "range": "stddev: 0.001037352966905841",
            "extra": "mean: 5.1861617962978 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 73.43353425590638,
            "unit": "iter/sec",
            "range": "stddev: 0.001847705720023969",
            "extra": "mean: 13.617756657539172 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1480.6110925612877,
            "unit": "iter/sec",
            "range": "stddev: 0.00020064270246832782",
            "extra": "mean: 675.3968040791283 usec\nrounds: 1128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 171.90662755437242,
            "unit": "iter/sec",
            "range": "stddev: 0.0007773976692835308",
            "extra": "mean: 5.817111383234539 msec\nrounds: 167"
          }
        ]
      },
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
          "distinct": false,
          "id": "5208801cc38ff2ccb02fc9f7e83ad40c44222af1",
          "message": "feat(backends): add more array functions",
          "timestamp": "2023-04-11T15:11:04+02:00",
          "tree_id": "58aaf24482daf613a6b5f05b9ec08ce64a56bfc8",
          "url": "https://github.com/ibis-project/ibis/commit/5208801cc38ff2ccb02fc9f7e83ad40c44222af1"
        },
        "date": 1681222508635,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.8874345673954,
            "unit": "iter/sec",
            "range": "stddev: 0.00010402889992851742",
            "extra": "mean: 10.215815793103669 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 482455.5503155712,
            "unit": "iter/sec",
            "range": "stddev: 3.42447407975074e-7",
            "extra": "mean: 2.072729807639079 usec\nrounds: 2080"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.37717746936043,
            "unit": "iter/sec",
            "range": "stddev: 0.00015483028176729944",
            "extra": "mean: 13.444984523807031 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.65189466488758,
            "unit": "iter/sec",
            "range": "stddev: 0.0072928148539946345",
            "extra": "mean: 12.247113237288122 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.34348217241576,
            "unit": "iter/sec",
            "range": "stddev: 0.0006765096085495503",
            "extra": "mean: 10.488393933332912 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6397210.9703172175,
            "unit": "iter/sec",
            "range": "stddev: 1.1146362207800825e-8",
            "extra": "mean: 156.3181212310749 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.1309599948536,
            "unit": "iter/sec",
            "range": "stddev: 0.00004406335351365888",
            "extra": "mean: 1.8652159166663296 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.57289466477976,
            "unit": "iter/sec",
            "range": "stddev: 0.002007448099257235",
            "extra": "mean: 21.471716696970503 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2339.01338145971,
            "unit": "iter/sec",
            "range": "stddev: 0.00007954899291305122",
            "extra": "mean: 427.53068790736415 usec\nrounds: 1381"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2270.817572712414,
            "unit": "iter/sec",
            "range": "stddev: 0.00010611019227932363",
            "extra": "mean: 440.37002884627765 usec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8996272579060411,
            "unit": "iter/sec",
            "range": "stddev: 0.0036142610915919754",
            "extra": "mean: 1.111571477199996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.30290949265251,
            "unit": "iter/sec",
            "range": "stddev: 0.00040191478560628664",
            "extra": "mean: 38.018607799997994 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.7224105471095,
            "unit": "iter/sec",
            "range": "stddev: 0.0005853333870225394",
            "extra": "mean: 10.027836215687882 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 259.50584606753506,
            "unit": "iter/sec",
            "range": "stddev: 0.003999327209112688",
            "extra": "mean: 3.8534777352944687 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17942850803879662,
            "unit": "iter/sec",
            "range": "stddev: 0.08591210938517482",
            "extra": "mean: 5.573250376600003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 759.4126092395668,
            "unit": "iter/sec",
            "range": "stddev: 0.000013134807475089471",
            "extra": "mean: 1.3168072110382048 msec\nrounds: 616"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.59010113476448,
            "unit": "iter/sec",
            "range": "stddev: 0.00020159379030060514",
            "extra": "mean: 17.670935021278467 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.7249599027512,
            "unit": "iter/sec",
            "range": "stddev: 0.00002664217092986422",
            "extra": "mean: 5.109210396552716 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.3530786055399,
            "unit": "iter/sec",
            "range": "stddev: 0.00007047811013124052",
            "extra": "mean: 6.084461626667045 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 277.69979041997306,
            "unit": "iter/sec",
            "range": "stddev: 0.00023359257995573607",
            "extra": "mean: 3.601010999999937 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 137836.16432537578,
            "unit": "iter/sec",
            "range": "stddev: 3.3518609403410413e-7",
            "extra": "mean: 7.254990044843399 usec\nrounds: 36765"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.63218389623227,
            "unit": "iter/sec",
            "range": "stddev: 0.0007697869874871507",
            "extra": "mean: 17.975206615387354 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5786999.967377469,
            "unit": "iter/sec",
            "range": "stddev: 1.0885742280647955e-8",
            "extra": "mean: 172.8011069012233 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4707.601768386182,
            "unit": "iter/sec",
            "range": "stddev: 0.00003109920581109581",
            "extra": "mean: 212.42238600458575 usec\nrounds: 886"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.1833285294094,
            "unit": "iter/sec",
            "range": "stddev: 0.000050597571896691384",
            "extra": "mean: 3.4108351420114578 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.0220752830785,
            "unit": "iter/sec",
            "range": "stddev: 0.0007349035580320806",
            "extra": "mean: 10.414271895831698 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69379.2802555284,
            "unit": "iter/sec",
            "range": "stddev: 5.100053184157959e-7",
            "extra": "mean: 14.413525137720297 usec\nrounds: 13625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.82179394218462,
            "unit": "iter/sec",
            "range": "stddev: 0.0007950600928605951",
            "extra": "mean: 22.819695636361427 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 95.42599199349344,
            "unit": "iter/sec",
            "range": "stddev: 0.0006137741790378995",
            "extra": "mean: 10.479325172414077 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.98936328019997,
            "unit": "iter/sec",
            "range": "stddev: 0.00005199168712168057",
            "extra": "mean: 6.329540035087446 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7357407.76650402,
            "unit": "iter/sec",
            "range": "stddev: 5.897567583752422e-9",
            "extra": "mean: 135.91743610476797 nsec\nrounds: 70428"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 281.730866632922,
            "unit": "iter/sec",
            "range": "stddev: 0.0002340920661201288",
            "extra": "mean: 3.549486827451315 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1760.4296183758856,
            "unit": "iter/sec",
            "range": "stddev: 0.000008229884074653534",
            "extra": "mean: 568.0431580801095 usec\nrounds: 1417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 84.93461236320091,
            "unit": "iter/sec",
            "range": "stddev: 0.016108870483584416",
            "extra": "mean: 11.773763041665022 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 266.76835861976645,
            "unit": "iter/sec",
            "range": "stddev: 0.00032900879881146044",
            "extra": "mean: 3.7485705020411824 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1687736.4404178862,
            "unit": "iter/sec",
            "range": "stddev: 1.0352935229531112e-7",
            "extra": "mean: 592.5095743932616 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 265.92860840689093,
            "unit": "iter/sec",
            "range": "stddev: 0.00025131033972333456",
            "extra": "mean: 3.7604077500000463 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6760586762542283,
            "unit": "iter/sec",
            "range": "stddev: 0.0010723520591019921",
            "extra": "mean: 1.4791615508000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11905.867402229718,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016965781331102856",
            "extra": "mean: 83.99220033415801 usec\nrounds: 6579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 114.64185348957056,
            "unit": "iter/sec",
            "range": "stddev: 0.0002367357922049718",
            "extra": "mean: 8.722817797873217 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 84.6162409028121,
            "unit": "iter/sec",
            "range": "stddev: 0.013912876687090282",
            "extra": "mean: 11.81806222222248 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1179.735936601002,
            "unit": "iter/sec",
            "range": "stddev: 0.00001520782025117011",
            "extra": "mean: 847.6473157892872 usec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2274.84836285981,
            "unit": "iter/sec",
            "range": "stddev: 0.00013115161664944088",
            "extra": "mean: 439.58973983780476 usec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.325643120690719,
            "unit": "iter/sec",
            "range": "stddev: 0.0002036149376742124",
            "extra": "mean: 96.84626790908365 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1865276.8953177754,
            "unit": "iter/sec",
            "range": "stddev: 1.1436638053476772e-7",
            "extra": "mean: 536.1134330834224 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.00776289641468,
            "unit": "iter/sec",
            "range": "stddev: 0.022317117188223844",
            "extra": "mean: 26.310414604652546 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2316.503648995984,
            "unit": "iter/sec",
            "range": "stddev: 0.00008063395481420886",
            "extra": "mean: 431.6850527878161 usec\nrounds: 1345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5326715247192917,
            "unit": "iter/sec",
            "range": "stddev: 0.0021712304765513957",
            "extra": "mean: 394.83999020000624 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 44.128083749975865,
            "unit": "iter/sec",
            "range": "stddev: 0.0007355787311885201",
            "extra": "mean: 22.661305794873698 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.05886275324691,
            "unit": "iter/sec",
            "range": "stddev: 0.00023013658784898374",
            "extra": "mean: 10.631640344444627 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.6325184126644,
            "unit": "iter/sec",
            "range": "stddev: 0.00082022762029048",
            "extra": "mean: 10.456694193547163 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.48798246478417,
            "unit": "iter/sec",
            "range": "stddev: 0.00015468984251770549",
            "extra": "mean: 8.511508828570953 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 95.36276363492333,
            "unit": "iter/sec",
            "range": "stddev: 0.0006435444057590387",
            "extra": "mean: 10.48627327777846 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2414.887800247903,
            "unit": "iter/sec",
            "range": "stddev: 0.00007881260509959892",
            "extra": "mean: 414.0979137404826 usec\nrounds: 1310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 85.76492225555124,
            "unit": "iter/sec",
            "range": "stddev: 0.017070788407263168",
            "extra": "mean: 11.659778539999479 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6692790432988807,
            "unit": "iter/sec",
            "range": "stddev: 0.0014384942921827296",
            "extra": "mean: 599.0610162000053 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.616976793422504,
            "unit": "iter/sec",
            "range": "stddev: 0.00008189014409120149",
            "extra": "mean: 64.0328799375034 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2336.2610738232443,
            "unit": "iter/sec",
            "range": "stddev: 0.00008140825772494603",
            "extra": "mean: 428.0343542100456 usec\nrounds: 1437"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.7985920955668,
            "unit": "iter/sec",
            "range": "stddev: 0.00024105641558072827",
            "extra": "mean: 3.6523197301575587 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.58689312609847,
            "unit": "iter/sec",
            "range": "stddev: 0.000789670725987513",
            "extra": "mean: 9.941653121211058 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 275.48184623282367,
            "unit": "iter/sec",
            "range": "stddev: 0.00027317582582334787",
            "extra": "mean: 3.6300032603776344 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7986068958198932,
            "unit": "iter/sec",
            "range": "stddev: 0.002426843312876951",
            "extra": "mean: 1.2521805224000047 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.0460205664451,
            "unit": "iter/sec",
            "range": "stddev: 0.0003687786695201923",
            "extra": "mean: 3.9518503304714843 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.0498552241649,
            "unit": "iter/sec",
            "range": "stddev: 0.0002561604502447676",
            "extra": "mean: 3.6094586629214658 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 683.5576612930213,
            "unit": "iter/sec",
            "range": "stddev: 0.00003473242901109642",
            "extra": "mean: 1.4629343749997545 msec\nrounds: 584"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.11848713308594,
            "unit": "iter/sec",
            "range": "stddev: 0.0008212861428413193",
            "extra": "mean: 9.988165309277154 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8028.589972254683,
            "unit": "iter/sec",
            "range": "stddev: 0.00003271263825392306",
            "extra": "mean: 124.55487245653526 usec\nrounds: 4571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.56350937635727,
            "unit": "iter/sec",
            "range": "stddev: 0.00033956095370403283",
            "extra": "mean: 15.252386724140303 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 743702.1474676601,
            "unit": "iter/sec",
            "range": "stddev: 4.5099779395705516e-7",
            "extra": "mean: 1.3446243276357959 usec\nrounds: 23981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 140.46306869264828,
            "unit": "iter/sec",
            "range": "stddev: 0.0000412650640012978",
            "extra": "mean: 7.11930907752081 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1863706.103577157,
            "unit": "iter/sec",
            "range": "stddev: 8.945780872561439e-8",
            "extra": "mean: 536.5652868124549 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 188.13313766836777,
            "unit": "iter/sec",
            "range": "stddev: 0.003616308264695086",
            "extra": "mean: 5.3153846918917225 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2354.900097303173,
            "unit": "iter/sec",
            "range": "stddev: 0.00007710913109497552",
            "extra": "mean: 424.64646425773986 usec\nrounds: 1273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 97.8335043154407,
            "unit": "iter/sec",
            "range": "stddev: 0.000664808620012178",
            "extra": "mean: 10.221447212764039 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.56839646163402,
            "unit": "iter/sec",
            "range": "stddev: 0.0008466530518804485",
            "extra": "mean: 9.94348160240868 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.493459106250355,
            "unit": "iter/sec",
            "range": "stddev: 0.0007620166769414699",
            "extra": "mean: 182.03466716667074 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2514236.9286791766,
            "unit": "iter/sec",
            "range": "stddev: 1.6211170310261862e-8",
            "extra": "mean: 397.73499012496046 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 98.03040278178533,
            "unit": "iter/sec",
            "range": "stddev: 0.0007982797247848289",
            "extra": "mean: 10.200916977011609 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.4663738923533,
            "unit": "iter/sec",
            "range": "stddev: 0.00008151864257702009",
            "extra": "mean: 6.270914523177427 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13386.608348974847,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016471011190418074",
            "extra": "mean: 74.70152064892379 usec\nrounds: 7458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.15480648341881,
            "unit": "iter/sec",
            "range": "stddev: 0.00004356446738675408",
            "extra": "mean: 9.420204634410013 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.91969202318133,
            "unit": "iter/sec",
            "range": "stddev: 0.00006902338570273129",
            "extra": "mean: 9.015531703703324 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12586172.806730492,
            "unit": "iter/sec",
            "range": "stddev: 3.4789557018734558e-9",
            "extra": "mean: 79.45226999150914 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2383.3495698722813,
            "unit": "iter/sec",
            "range": "stddev: 0.00008850451413181773",
            "extra": "mean: 419.577561194092 usec\nrounds: 1340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 373.1175562178477,
            "unit": "iter/sec",
            "range": "stddev: 0.00003471460857818743",
            "extra": "mean: 2.6801204696359604 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 81.3113543276199,
            "unit": "iter/sec",
            "range": "stddev: 0.019032733646059563",
            "extra": "mean: 12.298405410526033 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11584.706625642548,
            "unit": "iter/sec",
            "range": "stddev: 0.00001239318797763579",
            "extra": "mean: 86.3207012758111 usec\nrounds: 5721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.900945806799575,
            "unit": "iter/sec",
            "range": "stddev: 0.0022484101156709864",
            "extra": "mean: 1.1099446741999883 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}